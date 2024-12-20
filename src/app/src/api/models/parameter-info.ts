/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { CustomAttributeData } from '../models/custom-attribute-data';
import { MemberInfo } from '../models/member-info';
import { ParameterAttributes } from '../models/parameter-attributes';
import { Type } from '../models/type';
export interface ParameterInfo {
  attributes?: ParameterAttributes;
  customAttributes?: Array<CustomAttributeData> | null;
  defaultValue?: any | null;
  hasDefaultValue?: boolean;
  isIn?: boolean;
  isLcid?: boolean;
  isOptional?: boolean;
  isOut?: boolean;
  isRetval?: boolean;
  member?: MemberInfo;
  metadataToken?: number;
  name?: string | null;
  parameterType?: Type;
  position?: number;
  rawDefaultValue?: any | null;
}
