export const HERO_CONTENT = "I design, automate, and ship cloud infrastructure that scales. Specializing in AWS, Kubernetes, Terraform, and CI/CD pipelines — turning complex systems into reliable, repeatable deployments.";

export const ABOUT_TEXT = "I'm a cloud and DevOps engineer driven by curiosity, automation, and the thrill of building systems that actually scale in the real world. I thrive on turning complex infrastructure into clean, efficient pipelines—whether that's orchestrating cloud environments, tightening security, or streamlining deployments so they just work.";

export const SKILLS = [
  // Cloud
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 90 },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', category: 'cloud', level: 80 },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'cloud', level: 80 },

  // Infrastructure
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infrastructure', level: 90 },
  { name: 'AWS CDK', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'infrastructure', level: 85 },
  { name: 'CloudFormation', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscloudformation.svg', category: 'infrastructure', level: 85 },

  // Containers
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 90 },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 85 },

  // DevOps
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'devops', level: 90 },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops', level: 85 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 90 },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 85 },
  { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'devops', level: 85 },

  // Development
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', category: 'development', level: 80 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg', category: 'development', level: 75 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg', category: 'development', level: 80 },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'development', level: 85 },

  // Databases
  { name: 'DynamoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'database', level: 80 },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'database', level: 80 },
  { name: 'Aurora', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'database', level: 75 },
];

export const PROJECTS = [
  {
    title: 'Intelli-Doc-Engine',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'A fully serverless AI-powered document Q&A engine built on AWS. Upload any document and ask questions about it in plain English — answers are grounded strictly in your documents using Retrieval-Augmented Generation (RAG).',
    technologies: ['AWS Lambda', 'Amazon Bedrock', 'Amazon S3', 'Amazon Textract', 'OpenSearch Serverless', 'Amazon SQS', 'API Gateway', 'AWS CDK'],
    category: 'ai',
    githubLink: 'https://github.com/DELONE-de/Intelli-Doc-Engine.git',
    websiteLink: '',
  },
  {
    title: 'Subscription Cancellation System',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Event-driven serverless subscription management system built on AWS. Handles real-time cancellation workflows with automated execution, RESTful API endpoints, and a scalable architecture using Lambda, DynamoDB, EventBridge, and API Gateway — all provisioned with AWS CDK.',
    technologies: ['AWS CDK', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'EventBridge', 'API Gateway', 'Jest'],
    category: 'serverless',
    githubLink: 'https://github.com/DELONE-de/subscription-cancellation-system1.0',
    websiteLink: '',
  },
  {
    title: 'Basic CloudFormation CI/CD',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Automated CI/CD pipeline for CloudFormation infrastructure using AWS CodePipeline and CodeBuild. Covers full pipeline stages — source, validate, package, deploy, and teardown — with IAM least-privilege roles, S3 artifact storage, and GitHub webhook integration.',
    technologies: ['AWS CloudFormation', 'AWS CodePipeline', 'AWS CodeBuild', 'S3', 'IAM', 'GitHub', 'Bash'],
    category: 'devops',
    githubLink: 'https://github.com/DELONE-de/Basic-CloudFormation-CI-CD',
    websiteLink: '',
  },
  {
    title: 'Secure Kafka Pipeline',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Production-ready Infrastructure-as-Code solution for deploying a secure, scalable Apache Kafka data pipeline using Terraform. Features multi-environment support, TLS/SASL encryption, IAM least-privilege policies, and full observability across dev, staging, and production.',
    technologies: ['Terraform', 'Apache Kafka', 'AWS', 'TLS/SSL', 'SASL Auth', 'IAM', 'CloudWatch', 'Bash'],
    category: 'devops',
    githubLink: 'https://github.com/DELONE-de/SECURE-KAFKA-PIPELINE.git',
    websiteLink: '',
  },
  {
    title: 'Cloud ETL Pipeline with ML Training',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'A comprehensive cloud-native ETL pipeline that processes data and trains machine learning models using AWS services, orchestrated with Terraform and Step Functions.',
    technologies: ['Terraform', 'AWS Glue', 'SageMaker', 'Step Functions', 'Kinesis', 'Lambda', 'API Gateway', 'CloudWatch'],
    category: 'data',
    githubLink: 'https://github.com/DELONE-de/Cloud-ETL.git',
    websiteLink: '',
  },
];

export const CONTACT = {
  address: 'Lagos, Nigeria',
  phoneNo: '+234 8147461452',
  email: 'convenati@gmail.com',
  social: {
    github: 'https://github.com/DELONE-de/',
    linkedin: 'https://www.linkedin.com/in/adeoluwa-convenat-6198b32a6',
    twitter: 'https://x.com/Jamiedeennn',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  ai: PROJECTS.filter(project => project.category === 'ai'),
  data: PROJECTS.filter(project => project.category === 'data'),
  serverless: PROJECTS.filter(project => project.category === 'serverless'),
};
