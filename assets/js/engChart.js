const generateEngChart = (influcard, elementHTML) => {
  // Crear un elemento div para el gráfico de pastel
  elementHTML.style.width = "100%";
  elementHTML.style.height = "11rem";

  // Create root and chart
  const elementHTML_ID = "engdiv";
  elementHTML.setAttribute("id", elementHTML_ID);
  var root = am5.Root.new(elementHTML_ID);

  var myTheme = am5.Theme.new(root);

  // Set themes
  root.setThemes([am5themes_Animated.new(root)]);

  // Create chart
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true,
    })
  );

  // Add cursor
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  cursor.lineY.set("visible", false);

  // Create axes
  var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
  xRenderer.labels.template.setAll({
    centerY: am5.p50,
    centerX: am5.p50,
    paddingRight: 15,
  });

  xRenderer.grid.template.setAll({
    location: 1,
  });

  var xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.3,
      categoryField: "country",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {}),
    })
  );

  var yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1,
      }),
    })
  );

  // Create series
  var series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "country",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}",
      }),
    })
  );

  series.columns.template.setAll({
    cornerRadiusTL: 5,
    cornerRadiusTR: 5,
    strokeOpacity: 0,
  });
  series.columns.template.adapters.add("fill", function (fill, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });

  series.columns.template.adapters.add("stroke", function (stroke, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });

  // Set data
  var data = [
    {
      country: "L",
      value: 1.5,
    },
    {
      country: "M",
      value: 2,
    },
    {
      country: "X",
      value: 1.6,
    },
    {
      country: "J",
      value: 1.7,
    },
    {
      country: "V",
      value: 1.8,
    },
    {
      country: "S",
      value: 2.1,
    },
    {
      country: "D",
      value: 1.9,
    },
  ];

  xAxis.data.setAll(data);
  series.data.setAll(data);

  // Make stuff animate on load
  series.appear(1000);
  chart.appear(1000, 100);
};
