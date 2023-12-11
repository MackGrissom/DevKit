import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';

const features = [
  {
    name: 'Task Management',
    description: 'Effortlessly organize and manage your tasks for streamlined development processes.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Code Sandbox',
    description: 'Create, test, and iterate on your code within a versatile and intuitive sandbox environment.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database Architecture Tool',
    description: 'Design and optimize your database architecture for efficient data management.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Vibrant Community',
    description: 'Join a thriving community of developers and founders for collaboration and support.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Advanced Security',
    description: 'Ensure robust security measures to safeguard your development environment.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Database Backups',
    description: 'Secure your data with routine backups for peace of mind in development.',
    icon: ServerIcon,
  },
];

export function Features() {
  return (
    <div className="bg-gray-100 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Devkit </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Empowering Devs with Essential Tools</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Devkit offers a powerful toolkit: Task Manager, Code Sandbox, Database Architecture Tool, and a thriving community. <br/> Elevate your development experience with Devkit&apos;s array of features.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />


          
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Features;
