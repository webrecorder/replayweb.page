declare module "*.svg";

/**
 * Flattens to a normal string type, but preserves string literal suggestions
 */
type AnyString = string & {};
