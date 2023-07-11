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
      <div className="mx-auto flex max-w-lg flex-col rounded-2xl bg-white p-6 shadow-xl">
        <Form layout="vertical" requiredMark={false}>
          <Form.Item
            label="User name/ email address"
            name="username"
            rules={[
              { message: 'Please enter account information', required: true },
            ]}
          >
            <Input placeholder="User name/ Email Address" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { message: 'Please enter account information', required: true },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Form.Item
              name="policy"
              noStyle
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(
                            'Please confirm that you have read and understood the Privacy Policy',
                          ),
                        ),
                },
              ]}
              valuePropName="checked"
            >
              <Checkbox>
                Accept{' '}
                <a
                  className="text-[#2d5698]"
                  href="https://www.skillup4u.com/privacy-policy"
                  rel="noreferrer"
                  target="_blank"
                >
                  Privacy policy
                </a>
              </Checkbox>
            </Form.Item>
            <span className="float-right">
              <a className="contents text-[#2d5698]" href="#">
                Forgot password?
              </a>
            </span>
          </Form.Item>

          <Form.Item>
            <Button
              className="w-full justify-center text-base"
              htmlType="submit"
              type="primary"
            >
              Sign In
            </Button>
          </Form.Item>

          <div className="mb-12 text-center text-sm text-[#71717a]">
            {"Don't have an account? "}
            <a className="contents font-semibold text-[#2d5698]" href="#">
              Sign up
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
}

export { LoginPage };
