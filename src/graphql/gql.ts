/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query AllCharacteristics {\n    characteristics {\n      id\n      name\n      unit\n    }\n  }\n": typeof types.AllCharacteristicsDocument,
    "\n  query GetReadings($take: Int!, $skip: Int!) {\n    reading(take: $take, skip: $skip) {\n      id\n      value\n      characteristic_id\n    }\n  }\n": typeof types.GetReadingsDocument,
    "\n  mutation SaveReading($value: Int!, $characteristic_id: String!) {\n    createReading(value: $value, characteristic_id: $characteristic_id) {\n      id\n      value\n      characteristic_id\n    }\n  }\n": typeof types.SaveReadingDocument,
};
const documents: Documents = {
    "\n  query AllCharacteristics {\n    characteristics {\n      id\n      name\n      unit\n    }\n  }\n": types.AllCharacteristicsDocument,
    "\n  query GetReadings($take: Int!, $skip: Int!) {\n    reading(take: $take, skip: $skip) {\n      id\n      value\n      characteristic_id\n    }\n  }\n": types.GetReadingsDocument,
    "\n  mutation SaveReading($value: Int!, $characteristic_id: String!) {\n    createReading(value: $value, characteristic_id: $characteristic_id) {\n      id\n      value\n      characteristic_id\n    }\n  }\n": types.SaveReadingDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllCharacteristics {\n    characteristics {\n      id\n      name\n      unit\n    }\n  }\n"): typeof import('./graphql').AllCharacteristicsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetReadings($take: Int!, $skip: Int!) {\n    reading(take: $take, skip: $skip) {\n      id\n      value\n      characteristic_id\n    }\n  }\n"): typeof import('./graphql').GetReadingsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SaveReading($value: Int!, $characteristic_id: String!) {\n    createReading(value: $value, characteristic_id: $characteristic_id) {\n      id\n      value\n      characteristic_id\n    }\n  }\n"): typeof import('./graphql').SaveReadingDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
