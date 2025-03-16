import {defineType, defineField } from "sanity";  
import event from "./event";  

export const schemaTypes = [event];
import event from "./event";
import category from "./category";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([event, category]),
});
