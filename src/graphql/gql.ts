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
    "\n  query Readings {\n    reading {\n      id\n      value\n      sensor {\n        name\n        id\n      }\n    }\n  }\n": typeof types.ReadingsDocument,
    "\n  query Sensor($name: String!) {\n    sensor(name: $name) {\n      id\n      name\n      unit {\n        id\n        name\n        label\n      }\n    }\n  }\n": typeof types.SensorDocument,
};
const documents: Documents = {
    "\n  query Readings {\n    reading {\n      id\n      value\n      sensor {\n        name\n        id\n      }\n    }\n  }\n": types.ReadingsDocument,
    "\n  query Sensor($name: String!) {\n    sensor(name: $name) {\n      id\n      name\n      unit {\n        id\n        name\n        label\n      }\n    }\n  }\n": types.SensorDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Readings {\n    reading {\n      id\n      value\n      sensor {\n        name\n        id\n      }\n    }\n  }\n"): typeof import('./graphql').ReadingsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Sensor($name: String!) {\n    sensor(name: $name) {\n      id\n      name\n      unit {\n        id\n        name\n        label\n      }\n    }\n  }\n"): typeof import('./graphql').SensorDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
