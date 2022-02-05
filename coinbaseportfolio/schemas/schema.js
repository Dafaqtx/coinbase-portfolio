import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    {
      title: "Coins",
      name: "coins",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Symbol",
          name: "symbol",
          type: "string",
        },
        {
          title: "Contract address",
          name: "contractAddress",
          type: "string",
        },
        {
          title: "USD price",
          name: "usdPrice",
          type: "string",
        },
        {
          title: "Logo",
          name: "logo",
          type: "image",
        },
      ],
    },
  ]),
});
