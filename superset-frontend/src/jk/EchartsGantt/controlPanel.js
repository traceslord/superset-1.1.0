import React from 'react';
import { validateNonEmpty } from '@superset-ui/core';
import { sections, ColumnOption } from '@superset-ui/chart-controls';
import controls, { columnChoices } from '../controls';

const {
  echartsY,
  echartsSelect,
  echartsPicker,
  echartsGroupby,
  echartsGroupbyAggregate,
  echartsSort,
  echartsOrder,
  echartsBackgroundColor,

  echartsPreprocessingData,
  echartsDataPreprocessing,

  echartsLegendShow,
  echartsLegendType,
  echartsLegendTop,
  echartsLegendBottom,
  echartsLegendLeft,
  echartsLegendRight,
  echartsLegendWidth,
  echartsLegendHeight,
  echartsLegendOrient,
  echartsLegendAlign,
  echartsLegendPaddingTop,
  echartsLegendPaddingBottom,
  echartsLegendPaddingLeft,
  echartsLegendPaddingRight,
  echartsLegendItemGap,
  echartsLegendItemWidth,
  echartsLegendItemHeight,
  echartsLegendNotSelected,
  echartsLegendIcon,

  echartsGridShow,
  echartsGridTop,
  echartsGridBottom,
  echartsGridLeft,
  echartsGridRight,
  echartsGridWidth,
  echartsGridHeight,
  echartsGridBorderWidth,
  echartsGridBorderColor,
  echartsGridBackgroundColor,
  echartsGridContainLabel,

  echartsXAxisShow,
  echartsXAxisName,
  echartsXAxisNameLocation,
  echartsXAxisNameGap,
  echartsXAxisNameRotate,
  echartsXAxisLabelRotate,
  echartsXAxisInverse,

  echartsYAxisShow,
  echartsYAxisName,
  echartsYAxisNameLocation,
  echartsYAxisNameGap,
  echartsYAxisNameRotate,
  echartsYAxisLabelRotate,
  echartsYAxisInverse,

  echartsTooltipShow,
  echartsTooltipTriggerOn,
  echartsTooltipPaddingTop,
  echartsTooltipPaddingBottom,
  echartsTooltipPaddingLeft,
  echartsTooltipPaddingRight,
  echartsTooltipBorderWidth,
  echartsTooltipBorderColor,
  echartsTooltipBackgroundColor,
  echartsTooltipTextStyleColor,

  echartsToolboxFeatureSaveAsImageShow,
  echartsToolboxFeatureDataViewShow,
  echartsToolboxFeatureMagicTypeShow,
  echartsToolboxFeatureDataZoomShow,
  echartsToolboxFeatureRestoreShow,
} = controls;

export default {
  controlPanelSections: [
    sections.legacyTimeseriesTime,
    {
      label: '???????????????',
      controlSetRows: [[echartsPreprocessingData], [echartsDataPreprocessing]],
    },
    {
      label: '????????????',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'echarts_start_time',
            config: {
              type: 'SelectControl',
              label: '??????????????????',
              description: '?????????????????????',
              default: null,
              mapStateToProps: state => ({
                choices: columnChoices(state.datasource),
              }),
              validators: [validateNonEmpty],
            },
          },
        ],
        [
          {
            name: 'echarts_end_time',
            config: {
              type: 'SelectControl',
              label: '??????????????????',
              description: '?????????????????????',
              default: null,
              mapStateToProps: state => ({
                choices: columnChoices(state.datasource),
              }),
            },
          },
          {
            name: 'echarts_plan_period',
            config: {
              type: 'TextControl',
              label: '?????????????????????',
              description:
                '??????????????????????????????????????????????????????????????? + ????????????',
              default: 100,
              isInt: true,
            },
          },
        ],
        [
          {
            name: 'echarts_x',
            config: {
              type: 'SelectControl',
              label: '????????????',
              description: '?????????????????????',
              default: null,
              mapStateToProps: state => ({
                choices: columnChoices(state.datasource),
              }),
              validators: [validateNonEmpty],
            },
          },
        ],
        [echartsY],
        [
          {
            name: 'echarts_indicators',
            config: {
              type: 'SelectControl',
              label: '????????????',
              description: '?????????????????????????????????',
              default: [],
              optionRenderer: c =>
                React.createElement(ColumnOption, {
                  column: c,
                  showType: true,
                }),
              valueRenderer: c =>
                React.createElement(ColumnOption, {
                  column: c,
                }),
              valueKey: 'column_name',
              mapStateToProps: state => ({
                options: state.datasource ? state.datasource.columns : [],
              }),
              multi: true,
            },
          },
        ],
        [echartsSelect],
        [echartsPicker],
        [echartsGroupby, echartsGroupbyAggregate],
        [echartsSort, echartsOrder],
        ['row_limit'],
        ['adhoc_filters'],
        [echartsBackgroundColor],
      ],
    },
    {
      label: '???????????????',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'echarts_gantt_progress',
            config: {
              type: 'ColorPickerControl',
              label: '?????????',
              description: '?????????????????????',
              default: { r: 24, g: 144, b: 255, a: 1 },
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_gantt_period',
            config: {
              type: 'ColorPickerControl',
              label: '?????????',
              description: '?????????????????????',
              default: { r: 203, g: 223, b: 246, a: 1 },
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_gantt_hidden',
            config: {
              type: 'ColorPickerControl',
              label: '?????????',
              description: '?????????????????????????????????',
              default: { r: 255, g: 255, b: 255, a: 1 },
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_mark_line_formatter_prefix',
            config: {
              type: 'TextControl',
              label: '????????????????????????',
              description: '???????????????????????????',
              default: '?????????',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_mark_line_formatter_num',
            config: {
              type: 'TextControl',
              label: '?????????????????????????????????',
              description:
                '???????????????????????????????????????????????? = ???????????? - ?????????',
              default: 0,
              isInt: true,
              renderTrigger: true,
            },
          },
        ],
      ],
    },
    {
      label: '????????????',
      controlSetRows: [
        [echartsLegendShow],
        [echartsLegendType],
        [
          echartsLegendTop,
          echartsLegendBottom,
          echartsLegendLeft,
          echartsLegendRight,
        ],
        [echartsLegendWidth, echartsLegendHeight],
        [echartsLegendOrient, echartsLegendAlign],
        [
          echartsLegendPaddingTop,
          echartsLegendPaddingBottom,
          echartsLegendPaddingLeft,
          echartsLegendPaddingRight,
        ],
        [echartsLegendItemGap, echartsLegendItemWidth, echartsLegendItemHeight],
        [echartsLegendIcon, echartsLegendNotSelected],
      ],
    },
    {
      label: '????????????',
      controlSetRows: [
        [echartsGridShow],
        [echartsGridTop, echartsGridBottom, echartsGridLeft, echartsGridRight],
        [echartsGridWidth, echartsGridHeight],
        [echartsGridBorderWidth],
        [echartsGridBorderColor, echartsGridBackgroundColor],
        [echartsGridContainLabel],
      ],
    },
    {
      label: 'X ???',
      controlSetRows: [
        [echartsXAxisShow],
        [echartsXAxisName],
        [echartsXAxisNameLocation, echartsXAxisNameGap],
        [echartsXAxisNameRotate, echartsXAxisLabelRotate],
        [echartsXAxisInverse],
      ],
    },
    {
      label: 'Y ???',
      controlSetRows: [
        [echartsYAxisShow],
        [echartsYAxisName],
        [echartsYAxisNameLocation, echartsYAxisNameGap],
        [echartsYAxisNameRotate, echartsYAxisLabelRotate],
        [
          {
            name: 'echarts_y_axis_label_formatter',
            config: {
              type: 'TextAreaControl',
              language: 'javascript',
              label: '???????????????????????????',
              description: '????????????????????????????????????????????????',
              default: `str => {
  const arr = str.split('|||');
  let value = arr[0].split('???')[1];
  let newValue = '';
  const num = 15;
  const row = Math.ceil(value.length / num);
  if (value.length > num) {
    for (let i = 0; i < row; i++) {
      let valueSlice = '';
      if (i === row - 1) {
        valueSlice = value.slice(num * i, value.length);
      } else {
        valueSlice = value.slice(num * i, num * (i + 1)) + '\\n';
      }
      newValue += valueSlice;
    }
  } else {
    newValue = value;
  }
  return newValue;
};`,
              renderTrigger: true,
            },
          },
        ],
        [echartsYAxisInverse],
      ],
    },
    {
      label: '???????????????',
      controlSetRows: [
        [echartsTooltipShow],
        [
          {
            name: 'echarts_tooltip_trigger',
            config: {
              type: 'SelectControl',
              label: '????????????',
              default: 'axis',
              choices: [
                ['item', '?????????????????????'],
                ['axis', '???????????????'],
                ['none', '??????????????????'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
          echartsTooltipTriggerOn,
          {
            name: 'echarts_tooltip_axis_pointer_type',
            config: {
              type: 'SelectControl',
              label: '???????????????',
              default: 'shadow',
              choices: [
                ['line', '???????????????'],
                ['shadow', '???????????????'],
                ['cross', '?????????????????????'],
                ['none', '????????????'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_tooltip_formatter',
            config: {
              type: 'TextAreaControl',
              language: 'javascript',
              label: '??????????????????????????????',
              description: '????????????????????????????????????????????????',
              default: `params => {
  const formatNumber = (num) => {
    const n = num.toString();
    return n[1] ? n : '0' + n;
  };
  const formatDay = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return [year, month, day].map(formatNumber).join('-');
  };
  const progress = ((params[2].value - params[0].value) / (params[1].value - params[0].value)) * 100;
  const otherData = Object.keys(params[3].data).map((data, index) => {
    return data + '???' + Object.values(params[3].data)[index] + '<br />';
  }).join('');
  let res = params[0].name.split('|||')[0].split('???')[1] + '???<br />';
  res += '?????????????????????' + formatDay(params[0].value) + '<br />';
  res += '?????????????????????' + formatDay(params[1].value) + '<br />';
  res += params[2].seriesName + '???' + progress + '<br />';
  res += otherData;
  return res;
};`,
              renderTrigger: true,
            },
          },
        ],
        [
          echartsTooltipPaddingTop,
          echartsTooltipPaddingBottom,
          echartsTooltipPaddingLeft,
          echartsTooltipPaddingRight,
        ],
        [echartsTooltipBorderWidth],
        [
          echartsTooltipBorderColor,
          echartsTooltipBackgroundColor,
          echartsTooltipTextStyleColor,
        ],
      ],
    },
    {
      label: '?????????',
      controlSetRows: [
        [echartsToolboxFeatureMagicTypeShow],
        [echartsToolboxFeatureDataZoomShow],
        [echartsToolboxFeatureRestoreShow],
        [echartsToolboxFeatureDataViewShow],
        [echartsToolboxFeatureSaveAsImageShow],
      ],
    },
  ],
};
