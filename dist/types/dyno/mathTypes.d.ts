import { AllFloatTypes, AllIntTypes, AllSignedTypes, AllValueTypes, BaseType, BoolTypes, FloatTypes, IntTypes, SignedTypes, UintTypes, ValueTypes } from './types';
export type AddOutput<A extends AllValueTypes, B extends AllValueTypes> = BaseType & (A extends B ? A : A extends "int" ? B extends IntTypes ? B : never : B extends "int" ? A extends IntTypes ? A : never : A extends "uint" ? B extends UintTypes ? B : never : B extends "uint" ? A extends UintTypes ? A : never : A extends "float" ? B extends AllFloatTypes ? B : never : B extends "float" ? A extends AllFloatTypes ? A : never : never);
export type SubOutput<A extends AllValueTypes, B extends AllValueTypes> = AddOutput<A, B>;
export type MulOutput<A extends AllValueTypes, B extends AllValueTypes> = BaseType & (A extends "int" ? B extends IntTypes ? B : never : B extends "int" ? A extends IntTypes ? A : never : A extends "uint" ? B extends UintTypes ? B : never : B extends "uint" ? A extends UintTypes ? A : never : A extends "float" ? B extends AllFloatTypes ? B : never : B extends "float" ? A extends AllFloatTypes ? A : never : A extends IntTypes ? B extends A ? A : never : B extends IntTypes ? A extends B ? A : never : A extends UintTypes ? B extends A ? A : never : B extends UintTypes ? A extends B ? A : never : A extends "vec2" ? B extends "vec2" | "mat2" | "mat2x2" ? "vec2" : B extends "mat3x2" ? "vec3" : B extends "mat4x2" ? "vec4" : never : A extends "vec3" ? B extends "mat2x3" ? "vec2" : B extends "vec3" | "mat3" | "mat3x3" ? "vec3" : B extends "mat4x3" ? "vec4" : never : A extends "vec4" ? B extends "mat2x4" ? "vec2" : B extends "mat3x4" ? "vec3" : B extends "vec4" | "mat4" | "mat4x4" ? "vec4" : never : B extends "vec2" ? A extends "mat2" | "mat2x2" ? "vec2" : A extends "mat2x3" ? "vec3" : A extends "mat2x4" ? "vec4" : never : B extends "vec3" ? A extends "mat3x2" ? "vec2" : A extends "mat3" | "mat3x3" ? "vec3" : A extends "mat3x4" ? "vec4" : never : B extends "vec4" ? A extends "mat4x2" ? "vec2" : A extends "mat4x3" ? "vec3" : A extends "mat4" | "mat4x4" ? "vec4" : never : A extends "mat2" | "mat2x2" ? B extends "mat2" | "mat2x2" ? "mat2" : B extends "mat3x2" ? "mat3x2" : B extends "mat4x2" ? "mat4x2" : never : A extends "mat2x3" ? B extends "mat2" | "mat2x2" ? "mat2x3" : B extends "mat3x2" ? "mat3" : B extends "mat4x2" ? "mat4x3" : never : A extends "mat2x4" ? B extends "mat2" | "mat2x2" ? "mat2x4" : B extends "mat3x2" ? "mat3x4" : B extends "mat4x2" ? "mat4" : never : A extends "mat3x2" ? B extends "mat2x3" ? "mat2" : B extends "mat3" | "mat3x3" ? "mat3x2" : B extends "mat4x3" ? "mat4x2" : never : A extends "mat3" | "mat3x3" ? B extends "mat2x3" ? "mat2x3" : B extends "mat3" | "mat3x3" ? "mat3" : B extends "mat4x3" ? "mat4x3" : never : A extends "mat3x4" ? B extends "mat2x3" ? "mat2x4" : B extends "mat3" | "mat3x3" ? "mat3x4" : B extends "mat4x3" ? "mat4" : never : A extends "mat4x2" ? B extends "mat2x4" ? "mat2" : B extends "mat3x4" ? "mat3x2" : B extends "mat4" | "mat4x4" ? "mat4x2" : never : A extends "mat4x3" ? B extends "mat2x4" ? "mat2x3" : B extends "mat3x4" ? "mat3" : B extends "mat4" | "mat4x4" ? "mat4x3" : never : A extends "mat4" | "mat4x4" ? B extends "mat2x4" ? "mat2x4" : B extends "mat3x4" ? "mat3x4" : B extends "mat4" | "mat4x4" ? "mat4" : never : never);
export type DivOutput<A extends AllValueTypes, B extends AllValueTypes> = AddOutput<A, B>;
export type IModOutput<A extends AllIntTypes, B extends AllIntTypes> = BaseType & (A extends B ? A : A extends "int" ? B extends IntTypes ? B : never : B extends "int" ? A extends IntTypes ? A : never : A extends "uint" ? B extends UintTypes ? B : never : B extends "uint" ? A extends UintTypes ? A : never : never);
export type ModOutput<A extends FloatTypes, B extends FloatTypes> = BaseType & (A extends B ? A : B extends "float" ? A : never);
export type PowOutput<A extends FloatTypes, B extends FloatTypes> = BaseType & (A extends B ? A : never);
export type MinOutput<A extends ValueTypes, B extends ValueTypes> = BaseType & (A extends B ? A : B extends "float" ? A extends FloatTypes ? A : never : B extends "int" ? A extends IntTypes ? A : never : B extends "uint" ? A extends UintTypes ? A : never : never);
export type MaxOutput<A extends ValueTypes, B extends ValueTypes> = MinOutput<A, B>;
export type ClampOutput<A extends ValueTypes, B extends ValueTypes> = BaseType & (B extends "float" ? A extends FloatTypes ? A : never : B extends "int" ? A extends IntTypes ? A : never : B extends "uint" ? A extends UintTypes ? A : never : never);
export type MixOutput<A extends FloatTypes, T extends FloatTypes | BoolTypes> = BaseType & (T extends A ? A : T extends "float" ? A : T extends "bool" ? A extends "float" ? A : never : T extends "bvec2" ? A extends "vec2" ? A : never : T extends "bvec3" ? A extends "vec3" ? A : never : T extends "bvec4" ? A extends "vec4" ? A : never : never);
export type StepOutput<A extends FloatTypes, B extends FloatTypes> = BaseType & (A extends B ? B : A extends "float" ? B : never);
export type SmoothstepOutput<A extends FloatTypes, B extends FloatTypes, C extends FloatTypes> = BaseType & (A extends B ? (A extends C ? C : A extends "float" ? C : never) : never);
export type IsNanOutput<A extends FloatTypes> = BaseType & (A extends "float" ? "bool" : A extends "vec2" ? "bvec2" : A extends "vec3" ? "bvec3" : A extends "vec4" ? "bvec4" : never);
export type IsInfOutput<A extends FloatTypes> = IsNanOutput<A>;
export declare function addOutputType<A extends AllValueTypes, B extends AllValueTypes>(a: A, b: B, operation?: string): AddOutput<A, B>;
export declare function subOutputType<A extends AllValueTypes, B extends AllValueTypes>(a: A, b: B): SubOutput<A, B>;
export declare function mulOutputType<A extends AllValueTypes, B extends AllValueTypes>(a: A, b: B): MulOutput<A, B>;
export declare function divOutputType<A extends AllValueTypes, B extends AllValueTypes>(a: A, b: B): DivOutput<A, B>;
export declare function imodOutputType<A extends AllIntTypes, B extends AllIntTypes>(a: A, b: B): IModOutput<A, B>;
export declare function modOutputType<A extends FloatTypes, B extends FloatTypes>(a: A, b: B): ModOutput<A, B>;
export declare function modfOutputType<A extends FloatTypes>(a: A): A;
export declare function negOutputType<A extends AllSignedTypes>(a: A): A;
export declare function absOutputType<A extends SignedTypes>(a: A): A;
export declare function signOutputType<A extends SignedTypes>(a: A): A;
export declare function floorOutputType<A extends FloatTypes>(a: A): A;
export declare function ceilOutputType<A extends FloatTypes>(a: A): A;
export declare function truncOutputType<A extends FloatTypes>(a: A): A;
export declare function roundOutputType<A extends FloatTypes>(a: A): A;
export declare function fractOutputType<A extends FloatTypes>(a: A): A;
export declare function powOutputType<A extends FloatTypes>(a: A): A;
export declare function expOutputType<A extends FloatTypes>(a: A): A;
export declare function exp2OutputType<A extends FloatTypes>(a: A): A;
export declare function logOutputType<A extends FloatTypes>(a: A): A;
export declare function log2OutputType<A extends FloatTypes>(a: A): A;
export declare function sqrOutputType<A extends ValueTypes>(a: A): A;
export declare function sqrtOutputType<A extends FloatTypes>(a: A): A;
export declare function inversesqrtOutputType<A extends FloatTypes>(a: A): A;
export declare function minOutputType<A extends ValueTypes, B extends ValueTypes>(a: A, b: B, operation?: string): MinOutput<A, B>;
export declare function maxOutputType<A extends ValueTypes, B extends ValueTypes>(a: A, b: B): MaxOutput<A, B>;
export declare function clampOutputType<A extends ValueTypes, B extends ValueTypes>(a: A, b: B, _c: B): ClampOutput<A, B>;
export declare function mixOutputType<A extends FloatTypes, C extends FloatTypes | BoolTypes>(a: A, b: A, c: C): MixOutput<A, C>;
export declare function stepOutputType<A extends FloatTypes, B extends FloatTypes>(a: A, b: B): StepOutput<A, B>;
export declare function smoothstepOutputType<A extends FloatTypes, B extends FloatTypes, C extends FloatTypes>(a: A, b: B, c: C): SmoothstepOutput<A, B, C>;
export declare function isNanOutputType<A extends FloatTypes>(a: A, operation?: string): IsNanOutput<A>;
export declare function isInfOutputType<A extends FloatTypes>(a: A): IsInfOutput<A>;
