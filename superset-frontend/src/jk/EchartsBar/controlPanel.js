import { sections } from '@superset-ui/chart-controls';
import controls from '../controls';

const {
  echartsX,
  echartsIndicators,
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
  echartsXAxisDataFormat,
  echartsXAxisDataFormatType,
  echartsXAxisLabelInterval,

  echartsYAxisShow,
  echartsYAxisName,
  echartsYAxisNameLocation,
  echartsYAxisNameGap,
  echartsYAxisNameRotate,
  echartsYAxisLabelRotate,
  echartsYAxisInverse,

  echartsTooltipShow,
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
        [echartsIndicators],
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
            name: 'echarts_series_bar_width',
            config: {
              type: 'TextControl',
              label: '????????????',
              description:
                '??????????????????????????????????????????????????????????????? 40 ????????????????????? 60%',
              default: '',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_bar_min_height',
            config: {
              type: 'TextControl',
              label: '??????????????????',
              description:
                '??????????????????????????????????????????????????????????????????????????????',
              default: null,
              isInt: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_bar_max_width',
            config: {
              type: 'TextControl',
              label: '??????????????????',
              description:
                '?????????????????????????????????????????????????????????????????????????????? 40 ????????????????????? 60%',
              default: '',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_bar_min_width',
            config: {
              type: 'TextControl',
              label: '??????????????????',
              description:
                '?????????????????????????????????????????????????????????????????????????????? 40 ????????????????????? 60%',
              default: '1',
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_bar_category_gap',
            config: {
              type: 'TextControl',
              label: '??????????????????????????????',
              description:
                '?????????????????????????????????????????????????????? 20%??????????????????',
              default: '20%',
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_bar_gap',
            config: {
              type: 'TextControl',
              label: '??????????????????????????????',
              description:
                '???????????????????????????????????????????????? 30%???????????????????????? 30%???',
              default: '30%',
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_axis_swap',
            config: {
              type: 'CheckboxControl',
              label: '????????? X ?????? Y ?????????',
              default: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_stack',
            config: {
              type: 'CheckboxControl',
              label: '????????????',
              default: false,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_legend_hover_link',
            config: {
              type: 'CheckboxControl',
              label: '??????????????????',
              default: true,
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
        [echartsXAxisDataFormat],
        [echartsXAxisDataFormatType, echartsXAxisLabelInterval],
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
