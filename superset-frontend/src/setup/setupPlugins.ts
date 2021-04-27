/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { getChartControlPanelRegistry } from '@superset-ui/core';
import MainPreset from '../visualizations/presets/MainPreset';
import setupPluginsExtra from './setupPluginsExtra';

import Separator from '../explore/controlPanels/Separator';
import TimeTable from '../explore/controlPanels/TimeTable';

import EchartsLine from '../echarts/controlPanels/EchartsLine';

export default function setupPlugins() {
  new MainPreset().register();

  // TODO: Remove these shims once the control panel configs are moved into the plugin package.
  getChartControlPanelRegistry()
    .registerValue('separator', Separator)
    .registerValue('time_table', TimeTable)
    .registerValue('echarts_line', EchartsLine);

  setupPluginsExtra();
}