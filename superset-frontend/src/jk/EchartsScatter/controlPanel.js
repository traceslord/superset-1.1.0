import React from 'react';
import { validateNonEmpty } from '@superset-ui/core';
import { sections, ColumnOption } from '@superset-ui/chart-controls';
import controls, { columnChoices } from '../controls';

const {
  echartsX,
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
  echartsTooltipTrigger,
  echartsTooltipTriggerOn,
  echartsTooltipFormatter,
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
        [echartsX],
        [
          {
            name: 'echarts_y',
            config: {
              type: 'SelectControl',
              label: 'Y ???',
              description: 'Y ??????????????????',
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
              validators: [validateNonEmpty],
            },
          },
        ],
        [
          {
            name: 'echarts_name',
            config: {
              type: 'SelectControl',
              label: '??????',
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
            name: 'echarts_indicator',
            config: {
              type: 'SelectControl',
              label: '??????',
              description: '?????????????????????',
              default: null,
              mapStateToProps: state => ({
                choices: columnChoices(state.datasource),
              }),
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
            name: 'echarts_name_show',
            config: {
              type: 'SelectControl',
              label: '??????????????????',
              description: '?????????????????????',
              default: 'emphasis',
              choices: [
                ['emphasis', '???????????????'],
                ['always', '????????????'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_radius',
            config: {
              type: 'TextControl',
              label: '????????????',
              description:
                '??????????????????????????????????????????????????????????????????????????????',
              default: 20,
              isInt: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_regression_type',
            config: {
              type: 'SelectControl',
              label: '???????????????',
              description: '??????????????????',
              default: null,
              choices: [
                ['linear', '??????'],
                ['exponential', '??????'],
                ['logarithmic', '??????'],
                ['polynomial', '?????????'],
              ],
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
        [
          {
            name: 'echarts_x_axis_scale',
            config: {
              type: 'CheckboxControl',
              label: '??????????????? 0 ?????????',
              default: false,
              renderTrigger: true,
            },
          },
        ],
      ],
    },
    {
      label: 'Y ???',
      controlSetRows: [
        [echartsYAxisShow],
        [echartsYAxisName],
        [echartsYAxisNameLocation, echartsYAxisNameGap],
        [echartsYAxisNameRotate, echartsYAxisLabelRotate],
        [echartsYAxisInverse],
        [
          {
            name: 'echarts_y_axis_scale',
            config: {
              type: 'CheckboxControl',
              label: '??????????????? 0 ?????????',
              default: false,
              renderTrigger: true,
            },
          },
        ],
      ],
    },
    {
      label: '???????????????',
      controlSetRows: [
        [echartsTooltipShow],
        [
          echartsTooltipTrigger,
          echartsTooltipTriggerOn,
          {
            name: 'echarts_tooltip_axis_pointer_type',
            config: {
              type: 'SelectControl',
              label: '???????????????',
              default: 'cross',
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
        [echartsTooltipFormatter],
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
