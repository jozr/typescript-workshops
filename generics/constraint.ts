// You can also add conditionals to generics like the following example

const toUpperCase = <T extends string | null>(
  text: T
): T extends string ? string : null =>{
  if (text) {
    return text.toUpperCase()
  } else {
    return null
  }
}

// Apparently there is an open issue with this for TypeScript, so try to
// avoid situations like this for now.
// https://github.com/microsoft/TypeScript/issues/24929

// Reference:
// https://artsy.github.io/blog/2018/11/21/conditional-types-in-typescript/
