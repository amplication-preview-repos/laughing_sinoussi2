import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="date" source="date" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
