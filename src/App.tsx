import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { DatePicker } from '@/components/DatePicker';
import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { Select, SelectProps } from '@/components/Select';
import { Table } from '@/components/Table';
import { TimePicker } from '@/components/TimePicker';
import { ConfigProvider, Tag } from 'antd';
import {
  Calendar1 as CalendarIcon,
  Clock as ClockIcon,
  SearchNormal1 as SearchIcon,
  Sort as SortIcon,
} from 'iconsax-react';
import { useState } from 'react';

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
  const co2Options = (
    <Select defaultValue="kPa">
      <Select.Option value="kPa">kPa</Select.Option>
      <Select.Option value="torr">torr</Select.Option>
      <Select.Option value="mmHg">mmHg</Select.Option>
    </Select>
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Input placeholder="Enter email" />
        <Input placeholder="Search" prefix={<SearchIcon size="1em" />} />
        <Input addonAfter="beats per minute" />
        <Input addonAfter={co2Options} />
      </div>
      <div className="flex flex-row gap-4">
        <Input.TextArea placeholder="Pending..." rows={4} />
      </div>
    </div>
  );
}

function SelectSection() {
  const options: SelectProps['options'] = [
    {
      label: 'Jack',
      value: 'Jack',
    },
    {
      label: 'Angela Smith',
      value: 'AngelaSmith',
    },
    {
      label: 'Samantha Willi',
      value: 'SamanthaWilli',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Select
          defaultValue={options[0]}
          options={options}
          showSearch={false}
        ></Select>
        <Select
          defaultValue={options[0]}
          mode="multiple"
          options={options}
          showSearch={false}
        ></Select>
      </div>
    </div>
  );
}

function CheckboxSection() {
  const [hasError, setError] = useState(true);

  const options = [
    {
      label: 'Use',
      value: 'true',
    },
    {
      label: "Don't use",
      value: 'false',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Checkbox>
          Accept{' '}
          <a
            className={'text-[#2D5698]'}
            href="https://www.google.com"
            rel="noreferrer"
            target="_blank"
          >
            Privacy policy
          </a>
        </Checkbox>
        <Checkbox
          error={hasError}
          onChange={() => {
            setError(!hasError);
          }}
        >
          Accept{' '}
          <a
            className={'text-[#2D5698]'}
            href="https://www.google.com"
            rel="noreferrer"
            target="_blank"
          >
            Privacy policy
          </a>
        </Checkbox>
      </div>
      <div className="flex flex-row gap-4">
        <Checkbox.Group options={options} />
      </div>
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
      <div className="flex flex-row gap-4">
        <DatePicker />
        <DatePicker.RangePicker />
        <TimePicker />
        <TimePicker.RangePicker />
      </div>
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
      <Form
        className="flex flex-row gap-4"
        colon={false}
        requiredMark={false}
        size="large"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ message: 'Please input your username!', required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ message: 'Please input your password!', required: true }]}
        >
          <Input />
        </Form.Item>
      </Form>
      <Form layout="vertical" requiredMark={false} size="large">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ message: 'Please input your username!', required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ message: 'Please input your password!', required: true }]}
        >
          <Input />
        </Form.Item>
      </Form>
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

function IconSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <SortIcon />
        <CalendarIcon />
        <ClockIcon />
      </div>
    </div>
  );
}

function Example() {
  const sections = [
    ['Icon', 'Dony', IconSection],
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
        components: {
          Pagination: {
            borderRadius: 8,
            colorBgContainer: '#2D5698',
            colorPrimary: '#FFF',
            colorPrimaryHover: '#FFF',
            colorText: '#B5B5C3',
          },
          Table: {
            colorBorder: '#E4E4E7',
            colorTextHeading: '#B5B5C3',
          },
        },
        token: {
          colorPrimary: '#2D5698',
          colorText: '#555555',
          colorTextLabel: '#555555',
          fontFamily:
            "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        },
      }}
    >
      <Example />
    </ConfigProvider>
  );
}
