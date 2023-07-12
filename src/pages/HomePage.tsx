import { Layout } from '@/components/Layout';
import { Table } from '@/components/Table';
import { PropsWithChildren } from 'react';

function DummyTable() {
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

function SectionHeading(props: PropsWithChildren) {
  const { children } = props;
  return <h2 className="text-primary">{children}</h2>;
}

function Stats() {
  const stats = [
    'Number of Active Trainees',
    'Average Training Sessions',
    'Total Training Sessions',
    'Average Training Duration',
    'Total Training Duration',
    'Average Training Score',
  ];
  return (
    <ul className="m-0 grid list-none grid-cols-6 gap-4 p-0">
      {stats.map((stat) => {
        return (
          <li
            className="rounded-md border border-solid border-[#E4E4E7] bg-white p-3"
            key={stat}
          >
            <p className="mb-2 mt-0 text-xs font-medium uppercase tracking-wide text-gray-500	">
              {stat}
            </p>
            <span className="text-lg font-medium">10</span>
          </li>
        );
      })}
    </ul>
  );
}

function Dashboard() {
  return (
    <section>
      <SectionHeading>{"Suclienttrainer's Dashboard (Trainer)"}</SectionHeading>
      <p>{"Your Trainee's Performance in June"}</p>
      <Stats />
    </section>
  );
}

function TrainingRequirements() {
  return (
    <section>
      <SectionHeading>
        {"The following trainee's did not fulfil the training requirements"}
      </SectionHeading>
      <DummyTable />
    </section>
  );
}

function Feedback() {
  return (
    <section>
      <SectionHeading>
        {'Please provide feedback for the following training sessions'}
      </SectionHeading>
      <DummyTable />
    </section>
  );
}

function Goals() {
  return (
    <section>
      <SectionHeading>
        {'Please set goals for the following new trainees'}
      </SectionHeading>
      <DummyTable />
    </section>
  );
}

function TrainingSessions() {
  return (
    <section>
      <SectionHeading>{'Training Sessions in June'}</SectionHeading>
      <div className="min-h-[640px] rounded-lg border border-solid border-[#E4E4E7] bg-white p-4">
        Dummy Chart
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <Layout>
      <div className="flex flex-col justify-stretch gap-8">
        <Dashboard />
        <TrainingRequirements />
        <Feedback />
        <Goals />
        <TrainingSessions />
      </div>
    </Layout>
  );
}

export { HomePage };
