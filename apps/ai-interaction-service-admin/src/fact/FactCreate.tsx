import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="date" source="date" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
