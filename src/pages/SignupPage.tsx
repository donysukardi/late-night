import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';

function SignupPage() {
  const GENDER_OPTIONS = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ];

  return (
    <div className="h-full w-full">
      <img src="https://via.placeholder.com/147x70?text=Logo" />
      <div className="text-center text-5xl font-semibold !leading-normal text-[#090914]">
        Sign up
      </div>
      <div className="mb-12 text-center text-lg text-[#52525b]">
        Please enter your contact details to connect.
      </div>
      <div className="mx-auto flex max-w-3xl flex-col rounded-2xl bg-white p-6 shadow-xl">
        <Form layout="vertical">
          <div className="flex flex-col">
            <div className="flex flex-row gap-x-10">
              <div className="flex-1">
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ message: 'Please enter username', required: true }]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="flex-1">
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ message: 'Please enter email', required: true }]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>

            <div className="flex flex-row gap-x-10">
              <div className="flex-1">
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ message: 'Please enter password', required: true }]}
                >
                  <Input.Password />
                </Form.Item>
              </div>
              <div className="flex-1">
                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  rules={[
                    {
                      message: 'Please enter confirm password',
                      required: true,
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </div>
            </div>

            <div className="flex flex-row gap-x-10">
              <div className="flex-1">
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    { message: 'Please enter first name', required: true },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="flex-1">
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { message: 'Please enter last name', required: true },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>

            <div className="flex flex-row gap-x-10">
              <div className="flex-1">
                <Form.Item
                  label="Department"
                  name="department"
                  rules={[
                    { message: 'Please enter department', required: true },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="flex-1">
                <Form.Item
                  label="Position"
                  name="position"
                  rules={[{ message: 'Please enter position', required: true }]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>

            <div className="flex flex-row gap-x-10">
              <div className="flex-1">
                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                  rules={[
                    { message: 'Please enter phone number', required: true },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="flex-1">
                <Form.Item
                  label="Choose Gender"
                  name="chooseGender"
                  rules={[
                    { message: 'Please select a gender', required: true },
                  ]}
                >
                  <Select options={GENDER_OPTIONS}></Select>
                </Form.Item>
              </div>
            </div>

            <Form.Item>
              <Button className="w-full" htmlType="submit" type="primary">
                Sign up
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export { SignupPage };
