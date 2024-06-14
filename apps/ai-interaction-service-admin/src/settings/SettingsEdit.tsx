import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const SettingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput
          label="notificationsEnabled"
          source="notificationsEnabled"
        />
        <TextInput label="theme" source="theme" />
      </SimpleForm>
    </Edit>
  );
};
