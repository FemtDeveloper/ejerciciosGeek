import { paramCase, capitalCase } from "change-case";
// next
import { useRouter } from "next/router";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../../routes/paths";
// hooks
import useSettings from "../../../../hooks/useSettings";
// _mock_
import { _userList } from "../../../../_mock";
// layouts
import Layout from "../../../../layouts";
// components
import Page from "../../../../components/Page";
import HeaderBreadcrumbs from "../../../../components/HeaderBreadcrumbs";
// sections
import UserNewEditForm from "../../../../sections/@dashboard/user/UserNewEditForm";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "src/utils/firebase";

// ----------------------------------------------------------------------

UserEdit.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function UserEdit() {
  const [tableData, setTableData] = useState<any>([]);
  const [data, setData] = useState<any>({});
  const { themeStretch } = useSettings();

  const { query } = useRouter();

  const loadData = async () => {
    onValue(ref(db), async (snapshot) => {
      const usersData = await snapshot.val();
      setData(usersData);
      setTableData(Object.values(usersData.users));
    });
  };

  console.log({ data });
  const { name } = query;
  useEffect(() => {
    loadData();
  }, []);

  const currentUser = tableData.find(
    (user: any) => paramCase(user.name) === name
  );

  return (
    <Page title="User: Edit user">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading="Edit user"
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "User", href: PATH_DASHBOARD.user.list },
            { name: capitalCase(name as string) },
          ]}
        />

        <UserNewEditForm isEdit currentUser={currentUser} />
      </Container>
    </Page>
  );
}
