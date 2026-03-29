/* eslint-disable */
import { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any };
};

export type FloatFilterInput = {
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  /** greater than */
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** greater than or equal */
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** less than */
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** less than or equal */
  lte?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createReading: Reading;
};

export type MutationCreateReadingArgs = {
  characteristic_id: Scalars["String"]["input"];
  value: Scalars["Int"]["input"];
};

export type Query = {
  __typename?: "Query";
  characteristics: Array<Characteristic>;
  readings: Array<Reading>;
};

export type QueryCharacteristicsArgs = {
  includeReadings?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryReadingsArgs = {
  params?: InputMaybe<ReadingInputParams>;
  skip: Scalars["Int"]["input"];
  take: Scalars["Int"]["input"];
};

export type ReadingInputParams = {
  characteristic_id?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<FloatFilterInput>;
};

export type UnitInputParams = {
  /** label of unit */
  label?: InputMaybe<Scalars["String"]["input"]>;
  /** name of unit */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** name of sensor */
  sensor_name?: InputMaybe<Scalars["String"]["input"]>;
};

export type Characteristic = {
  __typename?: "characteristic";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  readings?: Maybe<Array<Array<Reading>>>;
  unit: Scalars["String"]["output"];
};

export type Reading = {
  __typename?: "reading";
  characteristic_id: Scalars["String"]["output"];
  created_at: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  value: Scalars["Int"]["output"];
};

export type AllCharacteristicsQueryVariables = Exact<{ [key: string]: never }>;

export type AllCharacteristicsQuery = {
  __typename?: "Query";
  characteristics: Array<{
    __typename?: "characteristic";
    id: string;
    name: string;
    unit: string;
  }>;
};

export type GetReadingsQueryVariables = Exact<{
  take: Scalars["Int"]["input"];
  skip: Scalars["Int"]["input"];
  characteristic_id: Scalars["String"]["input"];
}>;

export type GetReadingsQuery = {
  __typename?: "Query";
  readings: Array<{
    __typename?: "reading";
    id: string;
    value: number;
    created_at: any;
    characteristic_id: string;
  }>;
};

export type SaveReadingMutationVariables = Exact<{
  value: Scalars["Int"]["input"];
  characteristic_id: Scalars["String"]["input"];
}>;

export type SaveReadingMutation = {
  __typename?: "Mutation";
  createReading: {
    __typename?: "reading";
    id: string;
    value: number;
    characteristic_id: string;
  };
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>["__apiType"]>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const AllCharacteristicsDocument = new TypedDocumentString(`
    query AllCharacteristics {
  characteristics {
    id
    name
    unit
  }
}
    `) as unknown as TypedDocumentString<AllCharacteristicsQuery, AllCharacteristicsQueryVariables>;
export const GetReadingsDocument = new TypedDocumentString(`
    query GetReadings($take: Int!, $skip: Int!, $characteristic_id: String!) {
  readings(
    take: $take
    skip: $skip
    params: {characteristic_id: $characteristic_id}
  ) {
    id
    value
    created_at
    characteristic_id
  }
}
    `) as unknown as TypedDocumentString<GetReadingsQuery, GetReadingsQueryVariables>;
export const SaveReadingDocument = new TypedDocumentString(`
    mutation SaveReading($value: Int!, $characteristic_id: String!) {
  createReading(value: $value, characteristic_id: $characteristic_id) {
    id
    value
    characteristic_id
  }
}
    `) as unknown as TypedDocumentString<SaveReadingMutation, SaveReadingMutationVariables>;
