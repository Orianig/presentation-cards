const generatePieChart = (genderList, elementHTML) => {
  // Crear un elemento div para el gráfico de pastel
  elementHTML.style.width = "100%";
  elementHTML.style.height = "250px";

  // Create root and chart
  const elementHTML_ID = "pieChart";
  elementHTML.setAttribute("id", elementHTML_ID);
  var root = am5.Root.new(elementHTML_ID);

  var responsive = am5themes_Responsive.newEmpty(root);

  responsive.addRule({
    relevant: am5themes_Responsive.widthM,
    applying: function () {
      chart.set("layout", root.verticalLayout);
      legend.setAll({
        y: null,
        centerY: null,
        x: am5.p0,
        centerX: am5.p0,
      });
    },
    removing: function () {
      chart.set("layout", root.horizontalLayout);
      legend.setAll({
        y: am5.p50,
        centerY: am5.p50,
        x: null,
        centerX: null,
      });
    },
  });

  root.setThemes([am5themes_Animated.new(root), responsive]);

  var chart = root.container.children.push(am5percent.PieChart.new(root, {}));

  // Define data
  var data = [
    {
      gender: "Hombres",
      sales: 13.5,
      sliceSettings: {
        fill: am5.color(0x007bff),
        stroke: am5.color(0x007bff),
      },
    },
    {
      gender: "Mujeres",
      sales: 86.5,
      sliceSettings: {
        fill: am5.color(0xff69b4),
        stroke: am5.color(0xff69b4),
      },
    },
  ];

  // Create series
  var series = chart.series.push(
    am5percent.PieSeries.new(root, {
      name: "Series",
      valueField: "sales",
      categoryField: "gender",
    })
  );

  series.slices.template.setAll({
    templateField: "sliceSettings",
  });

  series.labels.template.setup = function (label, dataItem) {
    label.events.on("dataitemchanged", function (ev) {
      label.set(
        "background",
        am5.RoundedRectangle.new(root, {
          fill: ev.target.dataItem.get("slice").get("fill"),
        })
      );
    });
  };

  series.data.setAll(data);

  // Disabling labels and ticks
  series.labels.template.set("forceHidden", true);
  series.ticks.template.set("forceHidden", true);

  // Add legend
  var legend = chart.children.push(
    am5.Legend.new(root, {
      centerX: am5.percent(50), // Centrar tanto horizontal como verticalmente
      layout: am5.GridLayout.new(root, {
        maxColumns: 3,
        fixedWidthGrid: true,
      }),
      marginBottom: 20,
    })
  );

  legend.labels.template.setAll({
    fontSize: 10,
    fontWeight: "400",
  });

  legend.valueLabels.template.setAll({
    fontSize: 10,
    fontWeight: "400",
  });

  // Aplicar la configuración de la leyenda
  legend.data.setAll(series.dataItems);
};
