/**
 * Copyright (c) 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';

export type KfDocument = {
  key: number,
  name: string,
  canvas_size: KfPoint,
  frame_rate: number,
  animation_frame_count: number,
  features: KfFeature[],
  animation_groups: KfAnimationGroup[],
};

export type KfAnimationGroup = {
  group_id: number,
  group_name: string,
  parent_group?: number,
  animations: KfProperty[],
};

export type KfFeature = {
  name: string,
  feature_id: number,
  masking?: KfFeature,
  backed_image?: string,
  from_frame?: number,
  to_frame?: number,
  size?: KfPoint,
  fill_color?: string,
  stroke_color?: string,
  stroke_width?: number,
  stroke_line_cap?: string,
  effects?: {
    gradient?: KfGradient,
  },
  path_trim?: KfPathTrim,
  animation_group?: number,
  feature_animations?: KfProperty[],

  timing_curves?: KfTimingCurve[],
  key_frames?: KfValue<string[]>[],
};

export type KfValue<T> = {
  start_frame: number,
  data: T,
};

export type KfAnimatable<T> = {
  timing_curves: KfTimingCurve[],
  key_values: KfValue<T>[],
};

export type KfPoint = [number, number];

export type KfProperty = KfPropertyAnchorPoint | KfPropertyXPosition | KfPropertyYPosition | KfPropertyRotation | KfPropertyScale | KfPropertyOpacity | KfPropertyStrokeWidth | KfPropertyStrokeColor | KfPropertyFillColor;

export type KfPropertyAnchorPoint = KfAnimatable<KfPoint> & {
  property: 'ANCHOR_POINT',
};
export type KfPropertyXPosition = KfAnimatable<[number]> & {
  property: 'X_POSITION',
};
export type KfPropertyYPosition = KfAnimatable<[number]> & {
  property: 'Y_POSITION',
};
export type KfPropertyRotation = KfAnimatable<[number] | [number, number, number]> & {
  property: 'ROTATION',
};
export type KfPropertyScale = KfAnimatable<KfPoint> & {
  property: 'SCALE',
};
export type KfPropertyOpacity = KfAnimatable<[number]> & {
  property: 'OPACITY',
};
export type KfPropertyStrokeWidth = KfAnimatable<[number]> & {
  property: 'STROKE_WIDTH',
};
export type KfPropertyStrokeColor = KfAnimatable<string> & {
  property: 'STROKE_COLOR',
};
export type KfPropertyFillColor = KfAnimatable<string> & {
  property: 'FILL_COLOR',
};

export type KfTimingCurve = [KfPoint, KfPoint];

export type KfGradientColorStop = KfAnimatable<string>;
export type KfGradientRampStop = KfAnimatable<[number]>;

export type KfGradient = {
  gradient_type: 'linear' | 'radial',
  color_start?: KfGradientColorStop,
  color_end?: KfGradientColorStop,
  ramp_start?: KfGradientRampStop,
  ramp_end?: KfGradientRampStop,
};

export type KfPathTrimStop = KfAnimatable<[number]>;
export type KfPathTrim = {
  path_trim_start?: KfPathTrimStop,
  path_trim_end?: KfPathTrimStop,
  path_trim_offset?: KfPathTrimStop,
};
