import React, { Fragment, memo, useMemo } from "react";
import { AddGraphQLQuerySelection, Compose } from "@webiny/app-admin";
import { TenantFormFields } from "./TenantFormFields";
import { DocumentNode } from "graphql";

interface AddTenantSettingsFieldProps {
    querySelection: DocumentNode;
    element: JSX.Element;
}

const createFieldsHOC = (element: JSX.Element) => {
    return (Component: React.FC): React.FC => {
        return function FieldHOC() {
            return (
                <Fragment>
                    <Component />
                    {element}
                </Fragment>
            );
        };
    };
};

export const AddTenantFormField: React.FC<AddTenantSettingsFieldProps> = memo(
    function AddTenantFormField({ querySelection, element }) {
        const FieldHOC = useMemo(() => createFieldsHOC(element), []);

        return (
            <Fragment>
                <AddGraphQLQuerySelection
                    operationName={"GetTenant"}
                    selectionPath={"tenancy.getTenant.data"}
                    addSelection={querySelection}
                />
                <AddGraphQLQuerySelection
                    operationName={"CreateTenant"}
                    selectionPath={"tenancy.createTenant.data"}
                    addSelection={querySelection}
                />
                <Compose component={TenantFormFields} with={FieldHOC} />
            </Fragment>
        );
    }
);
