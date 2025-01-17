import { CmsModelField } from "@webiny/api-headless-cms/types";

type Field = Pick<CmsModelField, "id" | "type" | "storageId" | "fieldId" | "settings" | "label">;

export const createSystemFields = (): Field[] => {
    return [
        {
            id: "id",
            type: "text",
            storageId: "id",
            fieldId: "id",
            label: "ID"
        },
        {
            id: "entryId",
            type: "text",
            storageId: "entryId",
            fieldId: "entryId",
            label: "Entry ID"
        },
        {
            id: "createdOn",
            type: "datetime",
            storageId: "createdOn",
            fieldId: "createdOn",
            label: "Created On"
        },
        {
            id: "savedOn",
            type: "datetime",
            storageId: "savedOn",
            fieldId: "savedOn",
            label: "Saved On"
        },
        {
            id: "createdBy",
            type: "plainObject",
            storageId: "createdBy",
            fieldId: "createdBy",
            label: "Created By",
            settings: {
                path: "createdBy.id"
            }
        },
        {
            id: "meta",
            type: "plainObject",
            storageId: "meta",
            fieldId: "meta",
            label: "Meta"
        },
        {
            id: "wbyAco_location",
            type: "object",
            storageId: "location",
            label: "Location",
            fieldId: "wbyAco_location",
            settings: {
                fields: [
                    {
                        id: "folderId",
                        type: "text",
                        fieldId: "folderId",
                        label: "Folder ID",
                        storageId: "folderId",
                        settings: {
                            path: "location.folderId"
                        }
                    }
                ]
            }
        },
        {
            id: "ownedBy",
            type: "plainObject",
            storageId: "ownedBy",
            fieldId: "ownedBy",
            label: "Owned By",
            settings: {
                path: "ownedBy.id"
            }
        },
        {
            id: "version",
            type: "number",
            storageId: "version",
            fieldId: "version",
            label: "Version"
        },
        {
            id: "status",
            type: "text",
            storageId: "status",
            fieldId: "status",
            label: "Status"
        }
    ];
};
