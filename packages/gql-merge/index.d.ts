declare module '@ltv/gql-merge' {
  /**
 * Find GraphQL files based on a glob pattern and merge the results.
 * @param {string} fileGlob - A glob pattern to find files, e.g. '*.graphql'
 * @return {Promise<string>} A promise of the resulting string.
 */
  export async function mergeFileGlob(fileGlob: string): Promise<string>;

  /**
   * Find GraphQL files based on a glob pattern and merge the results.
   * @param {string} fileGlob - A glob pattern to find files, e.g. '*.graphql'
   * @return {Promise<string>} A promise of the resulting string.
   */
  export async function mergeFilePaths(filePaths: string[]): Promise<string>;

  /**
   * Merges an array of GraphQL strings into one
   * @param {string[]} schemaStrs - An array of GraphQL strings.
   * @return {string} The resulting merged GraphQL string.
   */
  export function mergeStrings(schemaStrs: string[]): string;

  /**
   * Merges duplicate definitions in a single GraphQL string
   * @param {string} schemaStr - The GraphQL String.
   * @return {string} The resulting merged GraphQL string.
   */
  export function mergeString(schemaStr: string): string;

  /**
   * Merges duplicate definitions in a single GraphQL abstract-syntax tree
   * @param {Document} schemaAst - The GraphQL AST.
   * @return {string} The resulting merged GraphQL string.
   */
  export function mergeAst(schemaAst: Document): string;
}
