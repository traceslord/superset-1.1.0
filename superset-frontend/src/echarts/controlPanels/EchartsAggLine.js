import { sections } from '@superset-ui/chart-controls';
import echartsControls, { FIGURE_SHAPE } from '../controls';

const {
  echartsSelect,
  echartsSort,
  echartsOrder,
  echartsBackgroundColor,

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
} = echartsControls;

export default {
  controlPanelSections: [
    sections.legacyTimeseriesTime,
    {
      label: '配置选项',
      expanded: true,
      controlSetRows: [
        ['metric'],
        ['groupby'],
        [echartsSelect],
        [echartsSort, echartsOrder],
        ['adhoc_filters'],
        [echartsBackgroundColor],
      ],
    },
    {
      label: '聚合折线图配置',
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'echarts_series_show_symbol',
            config: {
              type: 'CheckboxControl',
              label: '是否显示标志图形',
              default: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_show_all_symbol',
            config: {
              type: 'SelectControl',
              label: '标志图形显示策略',
              description:
                '默认：如果有足够空间则显示标志图形，否则随主轴标签间隔隐藏策略',
              default: 'auto',
              choices: [
                ['auto', '默认'],
                [true, '显示所有图形'],
                [false, '随主轴标签间隔隐藏策略'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_symbol',
            config: {
              type: 'SelectControl',
              label: '标记的图形',
              default: 'emptyCircle',
              choices: FIGURE_SHAPE,
              clearable: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_symbol_size_width',
            config: {
              type: 'TextControl',
              label: '标记的大小(宽)',
              default: 4,
              isInt: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_symbol_size_height',
            config: {
              type: 'TextControl',
              label: '标记的大小(高)',
              default: 4,
              isInt: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_symbol_rotate',
            config: {
              type: 'TextControl',
              label: '标记的旋转角度',
              description: '标记的旋转角度（而非弧度），正值表示逆时针旋转',
              default: 0,
              isInt: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_symbol_offset_horizontal',
            config: {
              type: 'TextControl',
              label: '标记的偏移(水平)',
              description: '标记相对于原本位置的水平偏移',
              default: 0,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_symbol_offset_vertical',
            config: {
              type: 'TextControl',
              label: '标记的偏移(垂直)',
              description: '标记相对于原本位置的垂直偏移',
              default: 0,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_step',
            config: {
              type: 'SelectControl',
              label: '阶梯线图',
              description:
                '选择为空则不显示成阶梯线图，选项配置分别为在当前点，当前点与下个点的中间点，下个点拐弯',
              default: '',
              choices: [
                ['start', '当前点'],
                ['middle', '中间点'],
                ['end', '下个点'],
              ],
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_line_style_type',
            config: {
              type: 'SelectControl',
              label: '线的类型',
              default: 'solid',
              choices: [
                ['solid', '实线'],
                ['dashed', '虚线'],
                ['dotted', '点线'],
              ],
              clearable: false,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_line_style_width',
            config: {
              type: 'TextControl',
              label: '线宽',
              default: 2,
              isInt: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_line_style_opacity',
            config: {
              type: 'TextControl',
              label: '线条透明度',
              description: '支持从 0 到 1 的数字，为 0 时不绘制该图形',
              default: 1,
              isFloat: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_area_style_opacity',
            config: {
              type: 'TextControl',
              label: '区域填充透明度',
              description: '支持从 0 到 1 的数字，为 0 时不绘制该图形',
              default: 0,
              isFloat: true,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_stack',
            config: {
              type: 'CheckboxControl',
              label: '数据堆叠',
              default: false,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_smooth',
            config: {
              type: 'CheckboxControl',
              label: '平滑曲线',
              default: false,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'echarts_series_legend_hover_link',
            config: {
              type: 'CheckboxControl',
              label: '图例联动高亮',
              default: true,
              renderTrigger: true,
            },
          },
          {
            name: 'echarts_series_connect_nulls',
            config: {
              type: 'CheckboxControl',
              label: '连接空数据',
              default: false,
              renderTrigger: true,
            },
          },
        ],
      ],
    },
    {
      label: '网格组件',
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
      label: 'X 轴',
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
      label: 'Y 轴',
      controlSetRows: [
        [echartsYAxisShow],
        [echartsYAxisName],
        [echartsYAxisNameLocation, echartsYAxisNameGap],
        [echartsYAxisNameRotate, echartsYAxisLabelRotate],
        [echartsYAxisInverse],
      ],
    },
    {
      label: '提示框组件',
      controlSetRows: [
        [echartsTooltipShow],
        [
          {
            name: 'echarts_tooltip_trigger',
            config: {
              type: 'SelectControl',
              label: '触发类型',
              default: 'axis',
              choices: [
                ['item', '数据项图形触发'],
                ['axis', '坐标轴触发'],
                ['none', '什么都不触发'],
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
              label: '指示器类型',
              default: 'cross',
              choices: [
                ['line', '直线指示器'],
                ['shadow', '阴影指示器'],
                ['cross', '十字准星指示器'],
                ['none', '无指示器'],
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
      label: '工具箱',
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
