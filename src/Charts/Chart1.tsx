import { useEffect, useRef } from 'react';
import ApexCharts, { ApexOptions } from 'apexcharts'
import { useTranslation } from 'react-i18next';
import ar from 'apexcharts/dist/locales/ar.json';
import en from 'apexcharts/dist/locales/en.json';

const Chart1 = ({ data }: any) => {
  const { t, i18n } = useTranslation()
  const chartRef = useRef<HTMLDivElement | null>(null)

  function getChartOptions(): ApexOptions {

    const strokeColor = "#1D1D1D"
    const borderColor = "#EBEDF4"
    const dataAxis = "#748AA1"

    const maxDataValue = Math.max(...data?.data);
    const minDataValue = Math.min(...data?.data);

    const categories = i18n.language === 'ar' ? [...data?.label].reverse() : data?.label;

    const isRtl = i18n.language === 'ar';

    return {
      series: [
        {
          name: t('Order'),
          data: isRtl ? [...data?.data].reverse() : data?.data
        },
      ],
      chart: {
        fontFamily: "inherit",
        type: "area",
        height: 300,
        toolbar: { show: !1 },
        locales: [ar, en],
        defaultLocale: i18n.language
      },
      legend: { show: !0 },
      dataLabels: { enabled: !1 },
      stroke: { curve: "smooth", show: !0, width: 2, colors: [strokeColor] },
      xaxis: {
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: {
          show: !0,
          style: { fontSize: '18px', colors: dataAxis },
          offsetY: 10,
        },
        crosshairs: {
          position: "front",
          stroke: { color: strokeColor, width: 1, dashArray: 3 },
        },
        tooltip: {
          enabled: !0,
          formatter: void 0,
          offsetY: 0,
          style: { fontSize: "14px" },
        },
        categories,
      },
      yaxis: {
        labels: {
          show: !0,
          style: { fontSize: '18px', colors: dataAxis },
          formatter: function (value) {
            return value + '%';
          },
          offsetX: isRtl ? -35 : -10,
        },
        tickAmount: 4,
        max: maxDataValue,
        min: minDataValue,
        opposite: isRtl,
      },
      fill: { type: "solid", opacity: 0 },
      states: {
        normal: { filter: { type: "none", value: 0 } },
        hover: { filter: { type: "none", value: 0 } },
        active: {
          allowMultipleDataPointsSelection: !1,
          filter: { type: "none", value: 0 },
        },
      },
      tooltip: {
        style: { fontSize: "14px" },
        y: {
          formatter: function (e) {
            return e + "%";
          },
          title: {
            formatter: function (e) {
              return isRtl ? `\u00A0\u00A0${e}\u00A0\u00A0` : e;
            }
          }
        },
      },
      colors: [strokeColor],
      markers: { strokeColors: strokeColor, strokeWidth: 2 },
      grid: {
        borderColor: borderColor,
        yaxis: { lines: { show: !0 }, },
      },
    }
  }

  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, getChartOptions())

    if (chart) {
      chart.render()
    }

    return chart
  }

  useEffect(() => {
    const chart = refreshChart()
    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, i18n.language])

  return (
    <div ref={chartRef} style={{ height: '100%' }}></div>
  );
}
export default Chart1