import React from "react";
import { ReactComponent as Move } from "@material-design-icons/svg/outlined/drive_file_move.svg";
import { i18n } from "@webiny/app/i18n";
import { Icon } from "@webiny/ui/Icon";
import { MenuItem } from "@webiny/ui/Menu";
import { ListItemGraphic } from "./styled";
import { useFile, useMoveFileToFolder } from "~/index";

const t = i18n.ns("app-admin/file-manager/components/table/record-action-move");

export const RecordActionMove = () => {
    const { file } = useFile();
    const moveFileToFolder = useMoveFileToFolder(file);

    return (
        <MenuItem onClick={moveFileToFolder}>
            <ListItemGraphic>
                <Icon icon={<Move />} />
            </ListItemGraphic>
            {t`Move`}
        </MenuItem>
    );
};
