import { defaultby } from 'src/echarts/utils/defaultby';
import { sort } from 'src/echarts/utils/sort';
import { formatColor } from 'src/echarts/utils/colors';
import { formatDate } from 'src/echarts/utils/dates';
import selectLayout from '../layout/selectLayout';

function drawChart(chart, teamData, teamIndex, propsConfig) {
  // eslint-disable-next-line no-param-reassign
  propsConfig = defaultby(propsConfig);

  const chartData = teamData[teamIndex];
  if (propsConfig.echartsSort) {
    sort(chartData, propsConfig.echartsSort, propsConfig.echartsOrder);
  }

  const metricLabel =
    propsConfig.metric && propsConfig.metric.label
      ? propsConfig.metric.label
      : propsConfig.metric;
  const series = [
    {
      type: 'line',
      showSymbol: propsConfig.echartsSeriesShowSymbol,
      showAllSymbol: propsConfig.echartsSeriesShowAllSymbol,
      symbol: propsConfig.echartsSeriesSymbol,
      symbolSize: [
        propsConfig.echartsSeriesSymbolSizeWidth,
        propsConfig.echartsSeriesSymbolSizeHeight,
      ],
      symbolRotate: propsConfig.echartsSeriesSymbolRotate,
      symbolOffset: [
        propsConfig.echartsSeriesSymbolOffsetHorizontal,
        propsConfig.echartsSeriesSymbolOffsetVertical,
      ],
      step: propsConfig.echartsSeriesStep,
      lineStyle: {
        type: propsConfig.echartsSeriesLineStyleType,
        width: propsConfig.echartsSeriesLineStyleWidth,
        opacity: propsConfig.echartsSeriesLineStyleOpacity,
      },
      areaStyle: {
        opacity: propsConfig.echartsSeriesAreaStyleOpacity,
      },
      legendHoverLink: propsConfig.echartsSeriesLegendHoverLink,
      stack: propsConfig.echartsSeriesStack,
      smooth: propsConfig.echartsSeriesSmooth,
      connectNulls: propsConfig.echartsSeriesConnectNulls,
      data: chartData.map(data => data[metricLabel]),
    },
  ];

  chart.setOption({
    grid: {
      show: propsConfig.echartsGridShow,
      top: propsConfig.echartsGridTop,
      bottom: propsConfig.echartsGridBottom,
      left: propsConfig.echartsGridLeft,
      right: propsConfig.echartsGridRight,
      width: propsConfig.echartsGridWidth,
      height: propsConfig.echartsGridHeight,
      borderWidth: propsConfig.echartsGridBorderWidth,
      borderColor: formatColor(propsConfig.echartsGridBorderColor),
      backgroundColor: formatColor(propsConfig.echartsGridBackgroundColor),
      containLabel: propsConfig.echartsGridContainLabel,
    },
    xAxis: {
      show: propsConfig.echartsXAxisShow,
      type: 'category',
      name: propsConfig.echartsXAxisName,
      nameLocation: propsConfig.echartsXAxisNameLocation,
      nameGap: propsConfig.echartsXAxisNameGap,
      nameRotate: propsConfig.echartsXAxisNameRotate,
      inverse: propsConfig.echartsXAxisInverse,
      boundaryGap: false,
      axisLabel: {
        interval: propsConfig.echartsXAxisLabelInterval,
        rotate: propsConfig.echartsXAxisLabelRotate,
      },
      data: chartData.map(data => {
        if (propsConfig.echartsXAxisDataFormat) {
          return formatDate.formatBox(
            propsConfig.echartsXAxisDataFormatType,
            data[propsConfig.groupby[1]],
          );
        }
        return data[propsConfig.groupby[1]];
      }),
    },
    yAxis: {
      show: propsConfig.echartsYAxisShow,
      type: 'value',
      name: propsConfig.echartsYAxisName,
      nameLocation: propsConfig.echartsYAxisNameLocation,
      nameGap: propsConfig.echartsYAxisNameGap,
      nameRotate: propsConfig.echartsYAxisNameRotate,
      inverse: propsConfig.echartsYAxisInverse,
      axisLabel: {
        rotate: propsConfig.echartsYAxisLabelRotate,
      },
    },
    tooltip: {
      show: propsConfig.echartsTooltipShow,
      trigger: propsConfig.echartsTooltipTrigger,
      axisPointer: {
        type: propsConfig.echartsTooltipAxisPointerType,
      },
      triggerOn: propsConfig.echartsTooltipTriggerOn,
      // eslint-disable-next-line no-new-func
      formatter: new Function(
        `return ${propsConfig.echartsTooltipFormatter}`,
      )(),
      backgroundColor: formatColor(propsConfig.echartsTooltipBackgroundColor),
      borderColor: formatColor(propsConfig.echartsTooltipBorderColor),
      borderWidth: propsConfig.echartsTooltipBorderWidth,
      padding: [
        propsConfig.echartsTooltipPaddingTop,
        propsConfig.echartsTooltipPaddingRight,
        propsConfig.echartsTooltipPaddingBottom,
        propsConfig.echartsTooltipPaddingLeft,
      ],
      textStyle: {
        color: formatColor(propsConfig.echartsTooltipTextStyleColor),
      },
    },
    toolbox: {
      feature: {
        magicType: {
          show: propsConfig.echartsToolboxFeatureMagicTypeShow,
          type: ['line', 'bar', 'stack', 'tiled'],
        },
        dataZoom: {
          show: propsConfig.echartsToolboxFeatureDataZoomShow,
          title: {
            zoom: '缩放',
            back: '还原',
          },
        },
        restore: {
          show: propsConfig.echartsToolboxFeatureRestoreShow,
        },
        dataView: {
          show: propsConfig.echartsToolboxFeatureDataViewShow,
        },
        saveAsImage: {
          show: propsConfig.echartsToolboxFeatureSaveAsImageShow,
        },
      },
    },
    series,
    backgroundColor: formatColor(propsConfig.echartsBackgroundColor),
  });
}

function echartsAggLine(element, props) {
  selectLayout(element, props, drawChart);
}

export default echartsAggLine;
