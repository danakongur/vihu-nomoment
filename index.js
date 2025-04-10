module.exports = {
  rules: {
    'no-moment': {
      meta: {
        type: "problem",
        docs: {
          description: "Don't allow the moment library",
        },
        fixable: "code",
        schema: [],
      },
      create(context) {
        return {
          ImportDeclaration(node) {
            if (node.source.value === "moment") {
              context.report({
                node,
                message: "Do not use the library 'moment'",
              });
            }
          },
        };
      },
    },
  },
};
