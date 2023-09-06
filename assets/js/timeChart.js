am5.ready(function () {
  // Create root element
  var root = am5.Root.new("timediv");

  // Set themes
  root.setThemes([am5themes_Animated.new(root)]);

  var data = [
    {
      name: "Noche",
      steps: 60,
      iconHTML: '<i class="fa-solid fa-moon"></i>',
    },
    {
      name: "Tarde",
      steps: 90,
      iconHTML: '<i class="fa-solid fa-cloud-sun"></i>',
    },
    {
      name: "Mañana",
      steps: 100,
      iconHTML: '<i class="fa-solid fa-sun"></i>',
    },
  ];

  // Create chart
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none",
      paddingLeft: 50,
      paddingRight: 40,
    })
  );

  // Create axes
  var yRenderer = am5xy.AxisRendererY.new(root, {});
  yRenderer.grid.template.set("visible", false);
  yRenderer.labels.template.set("fontSize", 10);

  var yAxis = chart.yAxes.push(
    am5xy.CategoryAxis.new(root, {
      categoryField: "name",
      renderer: yRenderer,
      paddingRight: 40,
    })
  );

  var xRenderer = am5xy.AxisRendererX.new(root, {});
  xRenderer.grid.template.set("strokeDasharray", [3]);

  var xAxis = chart.xAxes.push(
    am5xy.ValueAxis.new(root, {
      min: 0,
      renderer: xRenderer,
    })
  );

  // Add series
  var series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Income",
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "steps",
      categoryYField: "name",
      sequencedInterpolation: true,
      calculateAggregates: true,
      maskBullets: false,
      tooltip: am5.Tooltip.new(root, {
        dy: -30,
        pointerOrientation: "vertical",
        labelText: "{valueX}",
      }),
    })
  );

  series.columns.template.setAll({
    strokeOpacity: 0,
    cornerRadiusBR: 10,
    cornerRadiusTR: 10,
    cornerRadiusBL: 10,
    cornerRadiusTL: 10,
    maxHeight: 50,
    fillOpacity: 0.8,
  });

  var circleTemplate = am5.Template.new({});

  series.bullets.push(function (root, series, dataItem) {
    var bulletContainer = am5.Container.new(root, {});
    var circle = bulletContainer.children.push(
      am5.Circle.new(
        root,
        {
          radius: 15,
        },
        circleTemplate
      )
    );

    var maskCircle = bulletContainer.children.push(
      am5.Circle.new(root, { radius: 27 })
    );

    // only containers can be masked, so we add image to another container
    var imageContainer = bulletContainer.children.push(
      am5.Container.new(root, {
        mask: maskCircle,
      })
    );

    // not working
    var image = imageContainer.children.push(
      am5.Picture.new(root, {
        templateField: "pictureSettings",
        centerX: am5.p50,
        centerY: am5.p50,
        width: 8,
        height: 8,
      })
    );

    return am5.Bullet.new(root, {
      locationX: 0,
      sprite: bulletContainer,
    });
  });

  // heatrule
  series.set("heatRules", [
    {
      dataField: "valueX",
      min: am5.color(0xe5dc36),
      max: am5.color(0x5faa46),
      target: series.columns.template,
      key: "fill",
    },
    {
      dataField: "valueX",
      min: am5.color(0xe5dc36),
      max: am5.color(0x5faa46),
      target: circleTemplate,
      key: "fill",
    },
  ]);

  series.data.setAll(data);
  yAxis.data.setAll(data);

  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  cursor.lineX.set("visible", false);
  cursor.lineY.set("visible", false);

  cursor.events.on("cursormoved", function () {
    var dataItem = series.get("tooltip").dataItem;
    if (dataItem) {
      handleHover(dataItem);
    } else {
      handleOut();
    }
  });

  // Make stuff animate on load
  series.appear();
  chart.appear(1000, 100);
});
