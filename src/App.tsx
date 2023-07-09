import { Button } from '@/components/Button';
import { Table } from '@/components/Table';
import { ConfigProvider, Tag } from 'antd';

function ButtonSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Button type="primary">Primary Button</Button>
        <Button ghost type="primary">
          Primary Ghost
        </Button>
        <Button type="default">Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="link">Link Button</Button>
        <Button type="text">Text Button</Button>
      </div>
      <div className="flex flex-row gap-4">
        <Button size="large" type="primary">
          Large Primary Button
        </Button>
        <Button ghost size="large" type="primary">
          Large Primary Ghost
        </Button>
      </div>
    </div>
  );
}

function InputSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function SelectSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function CheckboxSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function RadioSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function UploaderSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function DatePickerSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function TableSection() {
  const columns = [
    {
      dataIndex: 'username',
      title: 'Username',
    },
    {
      dataIndex: 'firstName',
      title: 'First Name',
    },
    {
      dataIndex: 'lastName',
      title: 'Last Name',
    },
    {
      dataIndex: 'gender',
      title: 'Gender',
    },
    {
      dataIndex: 'department',
      title: 'Department',
    },
    {
      dataIndex: 'position',
      title: 'Position',
    },
    {
      dataIndex: 'role',
      title: 'Role',
    },
    {
      dataIndex: 'email',
      title: 'Email',
    },
    {
      dataIndex: 'dateJoined',
      title: 'Date Joined',
    },
  ];

  const data = Array.from({ length: 50 }, (_, idx) => ({
    dateJoined: 'Date Joined',
    department: 'Department',
    email: 'Email',
    firstName: 'First Name',
    gender: 'Gender',
    id: idx,
    lastName: 'Last Name',
    position: 'Position',
    role: 'Role',
    username: `Name ${idx}`,
  }));

  return (
    <div className="flex flex-col gap-4">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 5,
        }}
        rowKey="id"
      />
    </div>
  );
}

function FormSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function ChartSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function PopoverSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">{/* TODO: Add examples */}</div>
    </div>
  );
}

function Example() {
  const sections = [
    ['Button', 'Dony', ButtonSection],
    ['Input', 'Ivan', InputSection],
    ['Select', 'Ivan', SelectSection],
    ['Checkbox', 'Ivan', CheckboxSection],
    ['Radio', 'Ivan', RadioSection],
    ['Uploader', 'Ivan', UploaderSection],
    ['DatePicker', 'Ivan', DatePickerSection],
    ['Table', 'Dony', TableSection],
    ['Form', 'Dony', FormSection],
    ['Chart', 'Dony', ChartSection],
    ['Popover', 'Dony', PopoverSection],
  ] as const;

  return (
    <div className="flex flex-col gap-4 p-4">
      {sections.map(([title, pic, Section]) => (
        <div key={title}>
          <h2 className="text-2xl font-bold">
            {title}
            <Tag
              className="ml-2 align-middle"
              color={pic === 'Dony' ? 'blue' : 'green'}
            >
              {pic}
            </Tag>
          </h2>
          <Section />
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2D5698',
          colorText: '#555555',
          fontFamily:
            "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        },
      }}
    >
      <Example />
    </ConfigProvider>
  );
}
