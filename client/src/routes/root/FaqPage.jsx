import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Is this project open source?",
        answer: "Yes, this project is open source.",
    },
    {
        question: "What does the IoT solution offer?",
        answer:
            "Our IoT solution offers features such as Automated Emergency Response and Notification Systems, Real-time Temperature Monitoring with Customizable Thresholds, and access to Historical Temperature Data.",
    },
    {
        question: "How can I get started with the dashboard?",
        answer:
            "You can get started with our dashboard by [linking to the relevant documentation or page].",
    },
    {
        question: "How can I contact the staff for support or inquiries?",
        answer:
            "You can contact our staff by [providing contact information or linking to a contact form].",
    },
    {
        question: "What are the key features of the IoT solution?",
        answer:
            "The key features include: Data Logging and Analysis, Device Management (Threshold Customization), Temperature Monitoring and Alerting, Notification System, and Room Management.",
    },
    {
        question: "Can you provide more details about each feature?",
        answer:
            "Sure! - **Data Logging and Analysis**: This feature includes processes for logging and analyzing data collected by the IoT devices. - **Device Management (Threshold Customization)**: Users can customize thresholds for various parameters monitored by the IoT devices, enabling proactive management and alerting. - **Temperature Monitoring and Alerting**: Our solution provides real-time monitoring of temperature levels and alerts users when predefined thresholds are exceeded. - **Notification System**: The notification feature ensures that users are promptly alerted to any anomalies or critical events detected by the IoT devices. - **Room Management**: This feature allows users to manage and create virtual rooms within the IoT system, facilitating organization and efficient monitoring.",
    },
    {
        question: "Does your project have a presence on social media?",
        answer:
            "Yes, you can find us on Facebook, Instagram, GitHub, and YouTube for updates and community engagement.",
    },
];


export default function Faq() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
