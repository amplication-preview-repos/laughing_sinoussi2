import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const SettingsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="notificationsEnabled"
          source="notificationsEnabled"
        />
        <TextInput label="theme" source="theme" />
      </SimpleForm>
    </Create>
  );
};
