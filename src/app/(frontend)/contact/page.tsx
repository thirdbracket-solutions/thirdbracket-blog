import {
  Bracket,
  Button,
  Form,
  FormInput,
  FormLabel,
  FormTextarea,
} from "@thirdbracket/bracketui";
import PageHeader from "../../../components/PageHeader";

function ContactForm() {
  return (
    <Form className="max-w-xl mx-auto">
      <div className="mb-6">
        <FormLabel>Name</FormLabel>
        <FormInput
          type="text"
          className="border border-primary-400 dark:border-primary-700 bg-primary-50 dark:bg-primary-950 focus:ring-primary-400 dark:focus:ring-primary-500"
        ></FormInput>
      </div>
      <div className="mb-6">
        <FormLabel>Email</FormLabel>

        <FormInput
          type="email"
          className="border border-primary-400 dark:border-primary-700 bg-primary-50 dark:bg-primary-950 focus:ring-primary-500 dark:focus:ring-primary-400"
        ></FormInput>
      </div>
      <div className="mb-6">
        <FormLabel>Message</FormLabel>

        <FormTextarea
          rows={6}
          className="border border-primary-400 dark:border-primary-700 bg-primary-50 dark:bg-primary-950 focus:ring-primary-500 dark:focus:ring-primary-400"
        ></FormTextarea>
      </div>
      <Button
        size="md"
        type="submit"
        className="w-full !bg-gradient-primary dark:!bg-gradient-primary-dark !text-white dark:!text-primary-950  [@media(hover:hover)]:hover:opacity-90 active:opacity-80"
      >
        Send Message
      </Button>
    </Form>
  );
}

export default function Contact() {
  return (
    <Bracket>
      <PageHeader title="Contact Us" description="Get in touch with our team" />
      <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
        <ContactForm />
      </div>
    </Bracket>
  );
}
