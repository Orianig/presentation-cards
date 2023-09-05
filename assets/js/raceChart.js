am5.ready(function () {
  // Create root element
  var root = am5.Root.new("racediv");

  var myTheme = am5.Theme.new(root);

  myTheme.rule("Grid", ["base"]).setAll({
    strokeOpacity: 0.1,
  });

  // Set themes
  root.setThemes([am5themes_Animated.new(root), myTheme]);

  // Create chart
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none",
    })
  );

  // Create axes
  var yRenderer = am5xy.AxisRendererY.new(root, { minGridDistance: 30 });
  yRenderer.grid.template.set("location", 1);

  var yAxis = chart.yAxes.push(
    am5xy.CategoryAxis.new(root, {
      maxDeviation: 0,
      categoryField: "topic",
      renderer: yRenderer,
    })
  );

  var xAxis = chart.xAxes.push(
    am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: 0,
      renderer: am5xy.AxisRendererX.new(root, {
        visible: true,
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
      valueXField: "value",
      sequencedInterpolation: true,
      categoryYField: "topic",
    })
  );

  var columnTemplate = series.columns.template;

  columnTemplate.setAll({
    draggable: true,
    cursorOverStyle: "pointer",
    tooltipText: "drag to rearrange",
    cornerRadiusBR: 10,
    cornerRadiusTR: 10,
    strokeOpacity: 0,
  });
  columnTemplate.adapters.add("fill", (fill, target) => {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });

  columnTemplate.adapters.add("stroke", (stroke, target) => {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });

  columnTemplate.events.on("dragstop", () => {
    sortCategoryAxis();
  });

  // Get series item by category
  function getSeriesItem(category) {
    for (var i = 0; i < series.dataItems.length; i++) {
      var dataItem = series.dataItems[i];
      if (dataItem.get("categoryY") == category) {
        return dataItem;
      }
    }
  }

  // Axis sorting
  function sortCategoryAxis() {
    // Sort by value in descending order
    series.dataItems.sort(function (x, y) {
      return y.get("valueX") - x.get("valueX");
    });

    var easing = am5.ease.out(am5.ease.cubic);

    // Go through each axis item
    am5.array.each(yAxis.dataItems, function (dataItem, index) {
      // get corresponding series item
      var seriesDataItem = getSeriesItem(dataItem.get("category"));

      if (seriesDataItem) {
        // get index of series data item
        var seriesIndex = series.dataItems.indexOf(seriesDataItem);

        var column = seriesDataItem.get("graphics");

        // position after sorting
        var fy =
          yRenderer.positionToCoordinate(yAxis.indexToPosition(index)) -
          column.height() / 2;

        // set index to be the same as series data item index
        if (seriesIndex != dataItem.get("index")) {
          dataItem.set("index", seriesIndex);

          // current position
          var x = column.x();
          var y = column.y();

          column.set("dy", -(fy - y));
          column.set("dx", x);

          column.animate({ key: "dy", to: 0, duration: 600, easing: easing });
          column.animate({ key: "dx", to: 0, duration: 600, easing: easing });
        } else {
          column.animate({ key: "y", to: fy, duration: 600, easing: easing });
          column.animate({ key: "x", to: 0, duration: 600, easing: easing });
        }
      }
    });

    // Sort axis items by index.
    // This changes the order instantly, but as dx and dy is set and animated,
    // they keep in the same places and then animate to true positions.
    yAxis.dataItems.sort(function (x, y) {
      return x.get("index") - y.get("index");
    });
  }
  // Set data
  var data = [
    {
      topic: "Moda",
      value: 35.7,
    },
    {
      topic: "Belleza",
      value: 24.0,
    },
    {
      topic: "Familia",
      value: 15.2,
    },
    {
      topic: "Viaje",
      value: 9.5,
    },
    {
      topic: "Mascotas",
      value: 7.9,
    },
    {
      topic: "Cultura",
      value: 5.2,
    },
    {
      topic: "Otras",
      value: 0,
    },
  ];

  yAxis.data.setAll(data);
  series.data.setAll(data);

  // Make stuff animate on load
  series.appear(1000);
  chart.appear(1000, 100);
});
