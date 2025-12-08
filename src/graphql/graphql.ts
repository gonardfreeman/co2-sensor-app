/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type FloatFilterInput = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  /** greater than */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** greater than or equal */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** less than */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** less than or equal */
  lte?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createReading: Reading;
};


export type MutationCreateReadingArgs = {
  sensor_id: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  reading: Array<Reading>;
  sensor: Array<Sensor>;
  unit: Array<Unit>;
};


export type QueryReadingArgs = {
  params?: InputMaybe<ReadingInputParams>;
};


export type QuerySensorArgs = {
  name: Scalars['String']['input'];
};


export type QueryUnitArgs = {
  params?: InputMaybe<UnitInputParams>;
};

export type ReadingInputParams = {
  value?: InputMaybe<FloatFilterInput>;
};

export type UnitInputParams = {
  /** label of unit */
  label?: InputMaybe<Scalars['String']['input']>;
  /** name of unit */
  name?: InputMaybe<Scalars['String']['input']>;
  /** name of sensor */
  sensor_name?: InputMaybe<Scalars['String']['input']>;
};

export type Reading = {
  __typename?: 'reading';
  id: Scalars['ID']['output'];
  sensor: Sensor;
  sensor_id: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type Sensor = {
  __typename?: 'sensor';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  readings?: Maybe<Array<Array<Reading>>>;
  unit: Unit;
  unit_id: Scalars['String']['output'];
};

export type Unit = {
  __typename?: 'unit';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  sensor?: Maybe<Sensor>;
};

export type ReadingsQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadingsQuery = { __typename?: 'Query', reading: Array<{ __typename?: 'reading', id: string, value: number, sensor: { __typename?: 'sensor', name: string, id: string } }> };

export type SensorQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SensorQuery = { __typename?: 'Query', sensor: Array<{ __typename?: 'sensor', id: string, name: string, unit: { __typename?: 'unit', id: string, name: string, label: string } }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
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

export const ReadingsDocument = new TypedDocumentString(`
    query Readings {
  reading {
    id
    value
    sensor {
      name
      id
    }
  }
}
    `) as unknown as TypedDocumentString<ReadingsQuery, ReadingsQueryVariables>;
export const SensorDocument = new TypedDocumentString(`
    query Sensor($name: String!) {
  sensor(name: $name) {
    id
    name
    unit {
      id
      name
      label
    }
  }
}
    `) as unknown as TypedDocumentString<SensorQuery, SensorQueryVariables>;