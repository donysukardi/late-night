import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Form } from '@/components/Form';
import { Input } from '@/components/Input';

function LoginPage() {
  return (
    <div className="h-full w-full">
      <img src="https://via.placeholder.com/147x70?text=Logo" />
      <div className="text-center text-5xl font-semibold !leading-normal text-[#090914]">
        Sign in
      </div>
      <div className="mb-12 text-center text-lg text-[#52525b]">
        Please enter your contact details to connect.
      </div>
      <div className="mx-auto flex max-w-lg flex-col gap-2 rounded-2xl bg-white p-6 shadow-xl">
        <Form layout="vertical">
          <Form.Item
            label="User name/ email address"
            name="username"
            rules={[{ message: 'Please input your username!', required: true }]}
          >
            <Input placeholder="User name/ Email Address" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ message: 'Please input your password!', required: true }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
        </Form>

        <div className="mb-4 flex flex-row justify-between text-sm">
          <Checkbox>
            Accept{' '}
            <a className="text-[#2d5698]" href="#" rel="noreferrer">
              Privacy policy
            </a>
          </Checkbox>
          <a className="contents text-[#2d5698]" href="#">
            Forgot password?
          </a>
        </div>
        <Button className="mb-4 h-16 justify-center text-base" type="primary">
          Sign In
        </Button>
        <div className="mb-12 text-center text-sm text-[#71717a]">
          {"Don't have an account? "}
          <a className="contents font-semibold text-[#2d5698]" href="#">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export { LoginPage };
