'use strict';

window.CRISIS_DATA = {

  crisisCategories: [
    {
      id: 'reputation',
      label: 'Reputational & Media Crisis',
      icon: 'eye',
      color: '#7c3aed',
      severity: 'high',
      activeCases: 23,
      severityPct: 80,
      subcategories: ['Scandal & Tabloid Exposure', 'Defamation & False Narratives', 'Social Media Attack Campaigns', 'Cancel Culture Events', 'Whistleblower Disclosures'],
      immediateSteps: [
        'Engage a specialist reputation management firm within the first hour',
        'Implement a strict media silence protocol — no comment from principal or family',
        'Conduct an immediate internal fact-find: understand exactly what is true and what is false',
        'Identify the source of the story and their motivations',
        'Consult defamation and privacy counsel before any public response',
        'Audit all social media accounts and digital footprint for potential vulnerabilities',
        'Brief trusted close advisors, family, and board members with a controlled narrative'
      ],
      shortTermActions: [
        'Develop a calibrated response strategy: sometimes silence is the strongest response',
        'Engage a media law firm to issue takedown notices for false or private content',
        'Explore injunctive relief if publication of private information is imminent',
        'Identify and brief key third-party validators who can speak on your behalf',
        'Prepare a detailed rebuttal document for use if the story escalates',
        'Monitor all media channels 24/7 with an alert system',
        'Protect family members and minor children from media intrusion'
      ],
      longTermActions: [
        'Execute a proactive reputation rebuilding strategy through controlled media placement',
        'Pursue legal action against defamatory publications where merited',
        'Develop a long-term digital reputation management program',
        'Build a bank of positive media coverage and endorsements for future use',
        'Implement a private life security protocol to prevent future exposure',
        'Conduct annual vulnerability assessments of your digital and media footprint'
      ],
      keyAgencies: ['Reputation Management Firm', 'Media Law Counsel', 'Private Investigator (source identification)', 'PR Firm', 'Digital Monitoring Service', 'Family Liaison Counsel'],
      legalConsiderations: 'Defamation law, right to privacy, GDPR (right to be forgotten), injunctive relief, breach of confidence, harassment law. Jurisdiction matters significantly.',
      requiredResources: ['24/7 Media Monitoring', 'Legal Counsel', 'Crisis Communications Team', 'Digital Takedown Service', 'Intelligence on Source', 'Trusted Spokespeople'],
      successMetric: 'False narratives corrected + media cycle ended + no lasting damage to business relationships or personal standing'
    },
    {
      id: 'wealth-fraud',
      label: 'Wealth Fraud & Embezzlement',
      icon: 'trending-down',
      color: '#d97706',
      severity: 'critical',
      activeCases: 19,
      severityPct: 88,
      subcategories: ['Trusted Advisor Fraud', 'Ponzi & Investment Schemes', 'Family Office Embezzlement', 'Art & Asset Fraud', 'Offshore Account Theft'],
      immediateSteps: [
        'Immediately freeze all accounts and assets accessible to the suspected party',
        'Engage forensic accountants and white-collar criminal defense counsel',
        'Issue a litigation hold — preserve all financial records, emails, and communications',
        'Do not confront the suspected party until legal strategy is in place',
        'Conduct an emergency audit of all accounts, assets, and investments',
        'Identify all assets that may have already been moved or liquidated',
        'Notify your primary bank and custodians to monitor for unusual activity'
      ],
      shortTermActions: [
        'File emergency injunctions to freeze suspected assets domestically and offshore',
        'Engage an international asset recovery firm if funds have been moved abroad',
        'Instruct counsel to file civil claims alongside any criminal complaint',
        'Conduct a full review of all investment and advisory relationships',
        'Brief your family office leadership and board of trustees',
        'Engage a forensic technology firm to recover deleted communications',
        'Assess insurance coverage (crime policy, D&O, professional indemnity)'
      ],
      longTermActions: [
        'Implement a segregation-of-duties structure across all financial functions',
        'Conduct independent annual audits of all family office accounts',
        'Require dual authorisation for all transactions above a set threshold',
        'Implement a rigorous advisor due diligence and background check program',
        'Establish a trusted family council with independent financial oversight',
        'Conduct cyber security review of all financial platforms and access credentials'
      ],
      keyAgencies: ['Forensic Accountants', 'White-Collar Criminal Defense Firm', 'Asset Recovery Specialists', 'FBI Financial Crimes', 'SEC (if securities involved)', 'International Legal Network'],
      legalConsiderations: 'Criminal vs. civil strategy trade-offs, offshore asset recovery treaties, statute of limitations, attorney-client privilege preservation, tax implications of recovered funds.',
      requiredResources: ['Forensic Accounting Team', 'Asset Tracing Software', 'International Legal Network', 'Private Intelligence Firm', 'Crisis PR (if public exposure)', 'Independent Auditors'],
      successMetric: 'Assets recovered or judgment obtained + control environment rebuilt + no repeat vulnerability + responsible parties prosecuted'
    },
    {
      id: 'cyber-privacy',
      label: 'Cybersecurity & Digital Privacy',
      icon: 'shield-alert',
      color: '#1d4ed8',
      severity: 'critical',
      activeCases: 34,
      severityPct: 91,
      subcategories: ['Personal Data Breach', 'Account Takeover & SIM Swap', 'Doxxing & Online Harassment', 'Smart Home & Device Compromise', 'Deepfake & Synthetic Media'],
      immediateSteps: [
        'Engage a private cybersecurity firm specialising in HNWI personal security',
        'Immediately revoke access on all compromised accounts and devices',
        'Contact mobile carrier to lock SIM and prevent SIM swap attacks',
        'Enable hardware security keys (FIDO2) on all critical accounts immediately',
        'Preserve all evidence of the attack — do not delete anything',
        'Audit which private data has been accessed: financial, personal, location, communications',
        'Brief legal counsel on potential extortion, blackmail, or regulatory exposure'
      ],
      shortTermActions: [
        'Conduct a full personal digital security audit across all devices and platforms',
        'Engage a digital privacy firm to remove personal data from broker databases',
        'Issue takedown notices for any private content published without consent',
        'Implement a private communications protocol using end-to-end encrypted platforms',
        'Review physical security implications — doxxing can enable physical targeting',
        'Assess deepfake exposure and brief financial institutions and close contacts',
        'Place fraud alerts with all credit bureaus and financial institutions'
      ],
      longTermActions: [
        'Implement a zero-trust personal device and network architecture',
        'Engage an ongoing digital privacy monitoring service',
        'Conduct annual personal cyber security reviews with specialist firm',
        'Create a cyber incident response protocol for household staff and family',
        'Establish a private, secure communications network for the family',
        'Invest in continuous dark web monitoring for personal data exposure'
      ],
      keyAgencies: ['Private Cybersecurity Firm', 'Data Privacy Counsel', 'FBI Cyber Division (if criminal)', 'Credit Bureaus', 'Digital Takedown Service', 'Mobile Carrier Security Team'],
      legalConsiderations: 'GDPR right to erasure, Computer Fraud and Abuse Act, revenge porn / non-consensual imagery laws, cyberstalking statutes, defamation via synthetic media.',
      requiredResources: ['Personal Incident Response Team', 'Hardware Security Keys', 'Encrypted Communications Platform', 'Dark Web Monitoring', 'Digital Privacy Firm', 'Forensic Device Analysis'],
      successMetric: 'All compromised access revoked + stolen data contained + digital footprint hardened + no ongoing exposure'
    },
    {
      id: 'corporate-dispute',
      label: 'Corporate & Boardroom Disputes',
      icon: 'briefcase',
      color: '#ea580c',
      severity: 'high',
      activeCases: 12,
      severityPct: 74,
      subcategories: ['Hostile Shareholder Actions', 'Boardroom Coups', 'Partnership Disputes', 'Business Partner Fraud', 'Regulatory Investigation of Business'],
      immediateSteps: [
        'Retain specialist M&A and shareholder dispute counsel immediately',
        'Conduct an emergency review of your shareholder agreements and articles of association',
        'Assess voting rights, quorum requirements, and removal procedures',
        'Brief your most trusted board allies and assess the loyalty of the room',
        'Engage an investment bank if a hostile takeover or activist investor is involved',
        'Implement a media blackout on internal disputes — leaks destroy negotiating position',
        'Preserve all board communications — anticipate litigation discovery'
      ],
      shortTermActions: [
        'Develop a defence strategy: poison pill, white knight, buyback, or negotiated settlement',
        'Commission an independent valuation if ownership stakes are disputed',
        'Engage a proxy advisory firm if a shareholder vote is imminent',
        'Consider strategic communications to key shareholders and institutional investors',
        'Assess regulatory implications — change of control triggers, competition law',
        'Review and enforce any non-compete, non-solicitation, or confidentiality agreements',
        'Document all breaches of fiduciary duty by opposing parties'
      ],
      longTermActions: [
        'Restructure governance documents to prevent repeat vulnerability',
        'Build a more resilient and loyal board and shareholder structure',
        'Implement a stakeholder management program for key investors',
        'Conduct a comprehensive review of all partnership and shareholder agreements',
        'Develop a succession and ownership transition plan',
        'Strengthen relationships with key institutional shareholders before the next crisis'
      ],
      keyAgencies: ['Corporate Defense Counsel', 'Investment Bank', 'Proxy Advisory Firm', 'Forensic Accountants', 'PR / Investor Relations Firm', 'Regulatory Counsel'],
      legalConsiderations: 'Fiduciary duty law, shareholder rights, articles of association, poison pill legality, regulatory change-of-control triggers, securities disclosure obligations.',
      requiredResources: ['Corporate Defense Counsel', 'M&A Advisors', 'Independent Valuers', 'Proxy Solicitation Firm', 'Secure Board Communications Platform', 'Crisis PR'],
      successMetric: 'Control retained or fair exit achieved + governance strengthened + business continuity maintained + disputes resolved'
    },
    {
      id: 'legal-tax',
      label: 'Legal & Tax Jeopardy',
      icon: 'scale',
      color: '#0891b2',
      severity: 'high',
      activeCases: 16,
      severityPct: 76,
      subcategories: ['Criminal Tax Investigation', 'Asset Freezing Orders', 'Unexplained Wealth Orders', 'Money Laundering Allegations', 'Sanctions Exposure'],
      immediateSteps: [
        'Instruct a specialist criminal tax or financial crime defence firm immediately',
        'Exercise your right to silence — do not speak to investigators without counsel present',
        'Preserve all relevant financial records and place them under attorney-client privilege',
        'Conduct an emergency assessment of all accounts, structures, and potential exposure',
        'Identify any assets at risk of freezing and take lawful protective steps immediately',
        'Review all offshore structures, trusts, and beneficial ownership for compliance',
        'Brief your family office and trustees to cooperate only through designated counsel'
      ],
      shortTermActions: [
        'Engage specialist counsel in every jurisdiction where you have assets or exposure',
        'Challenge any asset freezing orders through emergency court applications',
        'Commission an independent tax compliance review of all structures',
        'Assess voluntary disclosure options — early cooperation typically reduces exposure',
        'Retain forensic accountants to reconstruct and document the legitimacy of wealth',
        'Brief your primary bank and private wealth manager on the situation',
        'Engage a PR firm experienced in managing white-collar criminal proceedings'
      ],
      longTermActions: [
        'Conduct a full global tax compliance review and remediate any gaps',
        'Restructure offshore structures for full transparency and FATCA/CRS compliance',
        'Implement an annual global tax health check with specialist counsel',
        'Establish a compliance framework for the family office and all associated entities',
        'Document the legitimate provenance of all significant wealth and assets',
        'Engage proactively with tax authorities where voluntary disclosure is beneficial'
      ],
      keyAgencies: ['Criminal Tax Defence Counsel', 'Financial Crime Specialist Firm', 'HMRC / IRS / Relevant Tax Authority', 'Asset Recovery Lawyers', 'Forensic Accountants', 'International Legal Network'],
      legalConsiderations: 'Criminal tax evasion vs. civil avoidance distinction, UWO exposure, POCA (Proceeds of Crime Act), FATCA/CRS obligations, voluntary disclosure programmes, extradition risk.',
      requiredResources: ['Criminal Defence Counsel', 'Forensic Accountants', 'International Tax Advisors', 'Asset Protection Lawyers', 'Crisis PR', 'Secure Document Management'],
      successMetric: 'Charges avoided or minimised + assets protected + full compliance achieved + no repeat exposure'
    },
    {
      id: 'family-estate',
      label: 'Family & Estate Disputes',
      icon: 'users',
      color: '#be185d',
      severity: 'medium',
      activeCases: 28,
      severityPct: 65,
      subcategories: ['High-Stakes Divorce', 'Contested Will & Probate', 'Family Office Governance Breakdown', 'Disinheritance Disputes', 'Incapacity & Guardianship Challenges'],
      immediateSteps: [
        'Retain a specialist high-net-worth family law or probate lawyer immediately',
        'Conduct an emergency review of all pre-nuptial agreements, trusts, and wills',
        'Identify which assets are at risk and their current legal structure',
        'Place a litigation hold on all relevant financial records and communications',
        'Assess jurisdiction — which country\'s courts will govern the dispute',
        'Brief your private bank and trustees to take no action without your authorisation',
        'Engage a psychologist or family mediator if minor children are involved'
      ],
      shortTermActions: [
        'Commission a comprehensive asset valuation for all disputed holdings',
        'Develop a litigation strategy that balances legal position with family relationships',
        'Explore mediation and arbitration before committing to adversarial litigation',
        'Review and enforce any nuptial agreements, shareholder agreements, or trust deeds',
        'Assess tax and offshore implications of any proposed settlement',
        'Protect vulnerable family members from undue influence',
        'Implement a temporary family governance structure to manage shared assets'
      ],
      longTermActions: [
        'Execute a comprehensive estate planning review and update all documents',
        'Establish a formal family constitution and governance framework',
        'Create a family council with clear decision-making rules for shared assets',
        'Implement a robust succession plan with proper trustee structures',
        'Conduct family meetings facilitated by a professional to address governance',
        'Invest in next-generation wealth education to prevent future conflicts'
      ],
      keyAgencies: ['High-Net-Worth Family Lawyer', 'Probate & Trusts Specialist', 'Independent Financial Mediator', 'Family Psychologist', 'Private Bank', 'Independent Trustees'],
      legalConsiderations: 'Prenuptial agreement enforceability, trust structure vulnerability, jurisdiction shopping, forced heirship rules in civil law countries, capacity challenges, offshore trust disclosure.',
      requiredResources: ['Specialist Family Law Firm', 'Independent Asset Valuers', 'Forensic Accountants', 'Mediation Specialist', 'Trust & Probate Lawyers', 'Family Therapist'],
      successMetric: 'Assets protected + family relationships preserved where possible + legal exposure minimised + estate plan updated'
    },
    {
      id: 'personal-safety',
      label: 'Personal Safety & Stalking',
      icon: 'shield',
      color: '#16a34a',
      severity: 'high',
      activeCases: 11,
      severityPct: 82,
      subcategories: ['Obsessive Stalking', 'Threatening Communications', 'Home Intrusion Attempts', 'Online Harassment Campaigns', 'Disgruntled Employee Threats'],
      immediateSteps: [
        'Brief a specialist threat assessment and close protection firm immediately',
        'Do not respond to any threatening communications — preserve all as evidence',
        'Conduct an immediate security audit of all residences, vehicles, and routines',
        'Vary all daily routines and avoid predictable patterns immediately',
        'File a police report and work with law enforcement on a parallel track',
        'Brief household staff on the threat and implement a visitor vetting protocol',
        'Assess whether children, family members, or close associates are also at risk'
      ],
      shortTermActions: [
        'Commission a professional threat assessment to classify the level of risk',
        'Deploy close protection officers for the principal and high-risk family members',
        'Engage a legal firm to obtain restraining orders and non-harassment injunctions',
        'Implement technical surveillance countermeasures at all properties',
        'Conduct an open-source intelligence sweep to understand the threat actor\'s capabilities',
        'Review digital footprint to remove location data and personal information',
        'Brief trusted inner circle — they may be approached by the threat actor'
      ],
      longTermActions: [
        'Implement a permanent executive protection program scaled to the threat level',
        'Conduct annual security reviews of all residences and travel protocols',
        'Invest in residential security upgrades: CCTV, access control, safe rooms',
        'Implement a full digital privacy program to reduce online targeting vectors',
        'Develop a family emergency and duress protocol',
        'Engage ongoing threat monitoring of the identified individual(s)'
      ],
      keyAgencies: ['Threat Assessment Specialist', 'Close Protection Firm', 'Civil Litigation Counsel (injunctions)', 'Local Law Enforcement', 'Private Intelligence Unit', 'Residential Security Consultants'],
      legalConsiderations: 'Restraining order / injunction thresholds, stalking and harassment criminal law, self-defence rights, surveillance law limitations, employment law for dismissed staff threats.',
      requiredResources: ['Close Protection Officers', 'Threat Assessment Report', 'Surveillance Technology', 'Residential Security Upgrades', 'Legal Injunctions', 'Crisis Communications (if public)'],
      successMetric: 'Threat contained + legal protections in place + principal and family safe + security posture permanently elevated'
    }
  ],

  experts: [
    {
      id: 'exp-001',
      name: 'Jonathan Ashford',
      title: 'Head of K&R & Personal Security',
      specializations: ['personal-safety', 'reputation'],
      yearsExperience: 24,
      credentials: ['Former MI6 Senior Officer', 'Control Risks K&R Specialist (15 yrs)', 'Certified Hostage Negotiator — FBI-trained'],
      bio: 'Jonathan spent 11 years as a senior intelligence officer before leading the K&R practice at a global risk firm. He has managed over 90 kidnap events across Latin America, West Africa, and Southeast Asia, achieving a 100% victim recovery rate. He advises UHNW families on personal security architecture and threat mitigation.',
      notableIncidents: ['UHNW Family Kidnapping — Colombia 2022', 'CEO Ransom Event — Nigeria 2021', 'Express Kidnap Series — Mexico 2020'],
      availability: 'available',
      languages: ['English', 'Spanish', 'Arabic'],
      initials: 'JA',
      color: '#dc2626'
    },
    {
      id: 'exp-002',
      name: 'Victoria Crane',
      title: 'Director of Reputation & Media Crisis',
      specializations: ['reputation', 'family-estate'],
      yearsExperience: 19,
      credentials: ['MA Strategic Communications — Oxford', 'Former Head of Communications, Global Investment Bank', 'Linklaters Media Law Certificate'],
      bio: 'Victoria has managed reputational crises for billionaires, heads of state, and global celebrities across three continents. Her speciality is containing tabloid exposure, social media attack campaigns, and whistleblower disclosures before they reach mainstream media. She has an unmatched network across Fleet Street and global broadcast media.',
      notableIncidents: ['FTSE 100 CEO Scandal Containment 2023', 'Royal Family Adjacent Exposure 2022', 'Tech Founder Cancel Campaign 2023'],
      availability: 'available',
      languages: ['English', 'French', 'Italian'],
      initials: 'VC',
      color: '#7c3aed'
    },
    {
      id: 'exp-003',
      name: 'Elena Marchetti',
      title: 'Wealth Fraud & Asset Recovery Lead',
      specializations: ['wealth-fraud', 'legal-tax'],
      yearsExperience: 21,
      credentials: ['CPA, CFE (Certified Fraud Examiner)', 'Ex-SEC Enforcement Division (12 yrs)', 'LLM in Securities Law — Georgetown'],
      bio: 'Elena spent 12 years in SEC enforcement before focusing exclusively on HNWI financial fraud response. She has overseen forensic investigations recovering over $4.8 billion in stolen private wealth and has successfully prosecuted trusted advisors, family office staff, and private bankers for embezzlement. She is one of the world\'s leading experts on Ponzi scheme unwinding.',
      notableIncidents: ['Family Office CFO Embezzlement 2023', 'Private Banker Fraud — $340M 2022', 'Hedge Fund Ponzi Exposure 2021'],
      availability: 'available',
      languages: ['English', 'Italian', 'Portuguese'],
      initials: 'EM',
      color: '#d97706'
    },
    {
      id: 'exp-004',
      name: 'Marcus Webb',
      title: 'Personal Cybersecurity & Privacy Director',
      specializations: ['cyber-privacy', 'wealth-fraud'],
      yearsExperience: 18,
      credentials: ['CISSP', 'Ex-NSA Cybersecurity Division', 'MS Computer Science — Carnegie Mellon', 'HNWI Digital Privacy Specialist'],
      bio: 'Former NSA analyst turned private client cyber specialist, Marcus focuses exclusively on high-net-worth individuals and family offices. He has responded to over 140 personal account takeovers, SIM swap attacks, smart home intrusions, and deepfake extortion events. He builds bespoke zero-trust security architectures for private residences and family communications.',
      notableIncidents: ['Billionaire Family Account Takeover 2023', 'Deepfake Extortion Response 2023', 'Family Office Network Intrusion 2022'],
      availability: 'deployed',
      languages: ['English', 'German', 'Mandarin'],
      initials: 'MW',
      color: '#1d4ed8'
    },
    {
      id: 'exp-005',
      name: 'Sir Richard Hollis',
      title: 'Corporate Governance & Boardroom Advisor',
      specializations: ['corporate-dispute', 'wealth-fraud'],
      yearsExperience: 30,
      credentials: ['Former Non-Executive Director, 6 FTSE 100 Boards', 'LLB Corporate Law — Cambridge', 'Chartered Director (IoD)'],
      bio: 'Sir Richard has advised on boardroom coups, hostile shareholder actions, and partnership disputes involving combined assets exceeding $50 billion. His network spans the City of London, Wall Street, and the Gulf, enabling him to move quickly in high-stakes corporate conflicts. He is considered one of the most trusted advisors to UHNW entrepreneurs facing governance crises.',
      notableIncidents: ['Hostile Takeover Defence — $8B Company 2022', 'Family Business Succession Dispute 2023', 'Private Equity Partner Fraud 2021'],
      availability: 'available',
      languages: ['English', 'French'],
      initials: 'RH',
      color: '#ea580c'
    },
    {
      id: 'exp-006',
      name: 'Natasha Osei',
      title: 'Legal Jeopardy & Tax Defence Specialist',
      specializations: ['legal-tax', 'wealth-fraud'],
      yearsExperience: 22,
      credentials: ['Barrister — Inner Temple', 'Former HMRC Investigation Officer', 'LLM International Tax Law — LSE'],
      bio: 'Natasha brings a rare combination of prosecutorial experience and elite private defence practice to bear on the most serious financial crime and tax investigations. She has represented UHNW individuals in criminal tax investigations across 18 jurisdictions, with a track record of achieving no-charge outcomes in cases where prosecution appeared inevitable. She is a leading authority on Unexplained Wealth Orders.',
      notableIncidents: ['UWO Defence — £120M Assets 2023', 'Criminal Tax Investigation — Monaco 2022', 'Asset Freezing Order Reversal 2023'],
      availability: 'available',
      languages: ['English', 'French', 'Twi'],
      initials: 'NO',
      color: '#0891b2'
    },
    {
      id: 'exp-007',
      name: 'Dr. Caroline Voss',
      title: 'Family Office & Estate Disputes Advisor',
      specializations: ['family-estate', 'corporate-dispute'],
      yearsExperience: 17,
      credentials: ['PhD Family Wealth Psychology — Wharton', 'Certified Family Wealth Advisor (CFWA)', 'Trained Mediator — CEDR'],
      bio: 'Dr. Voss is unique in combining legal expertise with deep psychological understanding of ultra-high-net-worth family dynamics. She has guided over 60 UHNW families through divorce, contested wills, disinheritance disputes, and family office governance breakdowns. Her mediation-first approach has prevented hundreds of millions in legal fees and preserved family relationships that adversarial litigation would have destroyed.',
      notableIncidents: ['Multi-Generation Succession Dispute — $2B Estate 2023', 'Cross-Jurisdictional Divorce 2022', 'Family Office Governance Crisis 2023'],
      availability: 'available',
      languages: ['English', 'German', 'Dutch'],
      initials: 'CV',
      color: '#be185d'
    },
    {
      id: 'exp-008',
      name: 'Colonel (Ret.) James Okafor',
      title: 'Personal Protection & Threat Assessment Lead',
      specializations: ['personal-safety', 'corporate-dispute'],
      yearsExperience: 26,
      credentials: ['SAS (Ret.) — 22 Special Air Service', 'Certified Threat Assessment Professional (CTAP)', 'Close Protection Instructor — College of Policing'],
      bio: 'Colonel Okafor brings elite military protective intelligence and a world-class threat assessment capability to private clients. He has designed and managed executive protection programmes for some of the world\'s wealthiest families, managing live stalking cases, credible threats, and personal safety crises with a discreet, intelligence-led methodology.',
      notableIncidents: ['Billionaire Stalking Case — London 2023', 'Residence Intrusion Response — Geneva 2022', 'Online Harassment to Physical Threat Escalation 2023'],
      availability: 'standby',
      languages: ['English', 'French', 'Hausa'],
      initials: 'JO',
      color: '#16a34a'
    }
  ],

  caseStudies: [
    {
      id: 'cs-002',
      crisisType: 'reputation',
      badge: 'Reputational Crisis',
      title: 'Tabloid Suppression — Private Scandal Contained Before Publication',
      year: 2023,
      duration: '72 hours',
      outcome: {
        livesSaved: 'N/A',
        recoveryTime: '72 hours to full containment',
        costSaved: 'Estimated £400M reputational value protected',
        environmentalDamage: 'N/A'
      },
      summary: 'A major UK tabloid was preparing to publish material about a UHNW client\'s private life, sourced from a disgruntled former employee. CrisisCore was engaged 18 hours before the print deadline.',
      phases: {
        immediate: 'We identified the source within 4 hours using private intelligence methods. Our media law team filed an emergency injunction application at the High Court, simultaneously opening a back-channel negotiation with the editor. A controlled internal narrative was prepared for the client\'s board and key relationships.',
        shortTerm: 'The injunction was granted, blocking publication. A settlement was negotiated with the source that included a comprehensive NDA and asset of wrongful disclosure. The story was killed entirely. No public reference to the event was ever made.',
        longTerm: 'A full digital footprint audit was conducted. The client\'s social media, staff NDAs, and private communication protocols were overhauled. An ongoing media monitoring retainer was established.'
      },
      testimonial: {
        quote: 'I was told the story was going to run. CrisisCore stopped it in 72 hours. Not managed — stopped.',
        author: 'UHNW Client (identity withheld)'
      },
      lessonsLearned: ['Speed of engagement is the single most important variable in reputation crises', 'Source identification enables legal and negotiation strategies unavailable without it', 'Pre-existing media law relationships enabled same-day injunction filing']
    },
    {
      id: 'cs-003',
      crisisType: 'wealth-fraud',
      badge: 'Wealth Fraud',
      title: 'Family Office CFO Embezzlement — $47M Recovered in Full',
      year: 2022,
      duration: '14 months',
      outcome: {
        livesSaved: 'N/A',
        recoveryTime: '$47M fully recovered within 14 months',
        costSaved: '$47M principal + $8M avoided further losses',
        environmentalDamage: 'N/A'
      },
      summary: 'A trusted family office CFO had systematically embezzled $47 million over four years through a series of fictitious vendor payments and unauthorised wire transfers. The fraud was discovered during an estate planning review.',
      phases: {
        immediate: 'Within 48 hours of engagement, we froze all accounts accessible to the CFO, placed a comprehensive litigation hold, and retained forensic accountants to begin tracing fund movements. The CFO was suspended without warning before any confrontation occurred.',
        shortTerm: 'Our asset recovery team traced funds across 7 jurisdictions using forensic accounting and private intelligence. Emergency injunctions froze $41M in assets within 3 weeks. Criminal complaints were filed in parallel with civil proceedings. The CFO\'s personal and business accounts were attached.',
        longTerm: 'Full recovery of $47M was achieved through a combination of asset seizure, settlement, and insurance recovery over 14 months. A complete overhaul of the family office control environment was implemented: dual authorisation, independent auditors, and a family oversight council.'
      },
      testimonial: {
        quote: 'I trusted this person completely. CrisisCore not only recovered every dollar — they made sure it could never happen again.',
        author: 'Family Patriarch (identity withheld)'
      },
      lessonsLearned: ['Immediate account freezing before confrontation is critical — any delay allows further movement of funds', 'Parallel civil and criminal strategy maximises both recovery and deterrence', 'No family office should operate without segregation of duties and independent annual audit']
    },
    {
      id: 'cs-004',
      crisisType: 'legal-tax',
      badge: 'Legal & Tax',
      title: 'Unexplained Wealth Order Defence — £120M Assets Protected',
      year: 2023,
      duration: '8 months',
      outcome: {
        livesSaved: 'N/A',
        recoveryTime: '8 months to full dismissal',
        costSaved: '£120M assets fully protected',
        environmentalDamage: 'N/A'
      },
      summary: 'A UHNW client received an Unexplained Wealth Order targeting £120M in UK property and investment assets. The application alleged that the wealth could not be explained by known lawful income.',
      phases: {
        immediate: 'We engaged specialist UWO defence counsel within 2 hours of the order being served. A strict communications blackout was implemented. An emergency forensic accounting team began reconstructing the full documented provenance of every asset and income stream going back 22 years.',
        shortTerm: 'A comprehensive evidential response was built over 4 months, demonstrating the legitimate origin of all assets through business sale proceeds, inheritance records, and investment documentation across 9 jurisdictions. Our counsel challenged procedural aspects of the order simultaneously.',
        longTerm: 'The UWO was dismissed in full at the High Court. No charges were brought. A full compliance review of all offshore structures was completed to eliminate any future vulnerability. The client\'s UK advisors were replaced with a more robust compliance-focused team.'
      },
      testimonial: {
        quote: 'The state had the presumption I was guilty. CrisisCore built the evidence that proved I was innocent — methodically, quickly, and completely.',
        author: 'UHNW Client (identity withheld)'
      },
      lessonsLearned: ['Documented wealth provenance is the ultimate defence — it must be maintained proactively', 'Speed of evidence assembly is critical — delay gives prosecutors the narrative initiative', 'UWOs are designed to be difficult to rebut; specialist counsel from day one is non-negotiable']
    }
  ],

  resources: [
    { id: 'r-001', tab: 'guides', category: 'personal-safety', title: 'Personal Security Guide for UHNW Individuals', description: 'Comprehensive guide to personal protection: threat assessment, residential security, travel protocols, household staff vetting, and emergency response procedures for private clients.', format: 'PDF', pages: 44, lastUpdated: '2025-01' },
    { id: 'r-002', tab: 'guides', category: 'reputation', title: 'Reputation Crisis Playbook — Private Individuals', description: 'How to manage tabloid exposure, social media attack campaigns, and whistleblower disclosures. Covers legal remedies, media silence strategy, and long-term rebuild.', format: 'PDF', pages: 58, lastUpdated: '2025-01' },
    { id: 'r-003', tab: 'guides', category: 'wealth-fraud', title: 'Trusted Advisor Fraud: First Response Guide', description: 'Step-by-step guide for the first 72 hours after discovering embezzlement or advisor fraud — from account freezing to forensic investigation and asset tracing across jurisdictions.', format: 'PDF', pages: 52, lastUpdated: '2024-11' },
    { id: 'r-004', tab: 'guides', category: 'cyber-privacy', title: 'Personal Cybersecurity Guide for UHNW Individuals', description: 'Protecting your digital life: from SIM swap prevention and account takeover response to smart home security, encrypted communications, and dark web monitoring.', format: 'PDF', pages: 66, lastUpdated: '2025-01' },
    { id: 'r-005', tab: 'guides', category: 'family-estate', title: 'Family Wealth Governance & Dispute Prevention', description: 'How to structure family councils, shareholder agreements, and succession plans to prevent estate disputes. Includes mediation frameworks and family constitution templates.', format: 'PDF', pages: 74, lastUpdated: '2024-12' },
    { id: 'r-006', tab: 'guides', category: 'legal-tax', title: 'Unexplained Wealth Orders: A Practical Guide', description: 'What UWOs are, how they work, how to respond if served, and how to build a proactive wealth provenance file that makes you resistant to future scrutiny.', format: 'PDF', pages: 48, lastUpdated: '2025-01' },
    { id: 'r-007', tab: 'templates', category: 'personal-safety', title: 'Family Emergency Response Protocol Template', description: 'Customisable family emergency protocol: duress codes, safe communication channels, designated family liaison roles, and escalation contact trees for personal safety events.', format: 'DOCX', pages: 14, lastUpdated: '2025-01' },
    { id: 'r-008', tab: 'templates', category: 'wealth-fraud', title: 'Family Office Internal Controls Framework', description: 'Template segregation-of-duties matrix, dual authorisation thresholds, vendor vetting procedures, and audit trigger protocols for family office financial operations.', format: 'DOCX', pages: 22, lastUpdated: '2024-11' },
    { id: 'r-009', tab: 'templates', category: 'reputation', title: 'Media Crisis Response Templates', description: 'Pre-drafted holding statements, media silence protocols, injunction application frameworks, and stakeholder notification templates for reputation crises.', format: 'DOCX', pages: 18, lastUpdated: '2025-01' },
    { id: 'r-010', tab: 'templates', category: 'family-estate', title: 'Family Constitution & Governance Template', description: 'A customisable family constitution framework covering decision rights, voting structures, employment policies, conflict resolution procedures, and wealth education programmes.', format: 'DOCX', pages: 34, lastUpdated: '2024-12' },
    { id: 'r-011', tab: 'checklists', category: 'personal-safety', title: 'Personal Security Threat Assessment Checklist', description: 'Self-assessment tool to identify personal security vulnerabilities: residential, digital, travel, social media exposure, and household staff vetting gaps.', format: 'PDF', pages: 8, lastUpdated: '2025-01' },
    { id: 'r-012', tab: 'checklists', category: 'cyber-privacy', title: 'Personal Cyber Security Audit Checklist', description: 'A 60-point personal digital security checklist covering devices, accounts, network, communications, staff access, and dark web exposure monitoring.', format: 'PDF', pages: 10, lastUpdated: '2025-01' },
    { id: 'r-013', tab: 'checklists', category: 'personal-safety', title: 'Secure Travel Protocol Checklist', description: 'Pre-travel security checklist for high-risk destinations: advance intelligence, route planning, communication protocols, local contact vetting, and medical preparation.', format: 'PDF', pages: 6, lastUpdated: '2024-11' },
    { id: 'r-014', tab: 'checklists', category: 'wealth-fraud', title: 'Advisor Due Diligence Checklist', description: 'Pre-engagement and ongoing due diligence checklist for private bankers, fund managers, family office staff, and professional advisors. Includes background check protocols.', format: 'PDF', pages: 8, lastUpdated: '2024-12' },
    { id: 'r-015', tab: 'legislation', category: 'legal-tax', title: 'Global Unexplained Wealth Order Legislation Guide', description: 'Comparative analysis of UWO and equivalent legislation across UK, EU, US, Australia, and UAE. Covers asset freezing thresholds, burden of proof, and defence strategies.', format: 'PDF', pages: 52, lastUpdated: '2025-01' },
    { id: 'r-016', tab: 'legislation', category: 'cyber-privacy', title: 'Privacy & Defamation Law Guide — 20 Jurisdictions', description: 'Comparative guide to right of privacy, defamation, data protection (GDPR/CCPA), and non-consensual content laws across the jurisdictions most relevant to UHNW individuals.', format: 'PDF', pages: 60, lastUpdated: '2025-01' },
    { id: 'r-017', tab: 'legislation', category: 'personal-safety', title: 'Stalking & Harassment Law — International Guide', description: 'Comparative guide to stalking, harassment, and non-molestation legislation across UK, US, EU, and UAE. Covers injunction thresholds, criminal prosecution, and online harassment statutes.', format: 'PDF', pages: 34, lastUpdated: '2024-10' },
    { id: 'r-018', tab: 'legislation', category: 'wealth-fraud', title: 'Asset Recovery Law — International Framework', description: 'Guide to civil and criminal asset recovery across key jurisdictions, including Mareva injunctions, mutual legal assistance treaties, and offshore recovery mechanisms.', format: 'PDF', pages: 44, lastUpdated: '2024-11' }
  ],

  emergencyContacts: [
    { region: 'North America', hotline: '+1-800-CRISIS-1', email: 'na@crisiscore.com', sla: '< 15 minutes', cities: ['New York', 'Chicago', 'Los Angeles', 'Houston', 'Toronto'] },
    { region: 'Europe', hotline: '+44-20-CRISIS-1', email: 'eu@crisiscore.com', sla: '< 20 minutes', cities: ['London', 'Frankfurt', 'Paris', 'Amsterdam', 'Zurich'] },
    { region: 'Asia Pacific', hotline: '+65-CRISIS-1', email: 'apac@crisiscore.com', sla: '< 25 minutes', cities: ['Singapore', 'Tokyo', 'Sydney', 'Hong Kong', 'Mumbai'] },
    { region: 'Middle East & Africa', hotline: '+971-CRISIS-1', email: 'mea@crisiscore.com', sla: '< 30 minutes', cities: ['Dubai', 'Nairobi', 'Cairo', 'Lagos', 'Johannesburg'] },
    { region: 'Latin America', hotline: '+55-11-CRISIS-1', email: 'latam@crisiscore.com', sla: '< 25 minutes', cities: ['São Paulo', 'Mexico City', 'Bogotá', 'Buenos Aires', 'Lima'] },
    { region: 'Global Command', hotline: '+1-800-000-0000', email: 'global@crisiscore.com', sla: '< 10 minutes', cities: ['24/7 Global Operations Center'] }
  ],

  liveAlerts: [
    'ACTIVE: Personal safety threat assessment underway — Private Client, Europe',
    'MONITORING: Elevated digital targeting of UHNW individuals — Financial Centres',
    'RESOLVED: Reputation crisis contained — full media suppression achieved',
    'ACTIVE: Wealth fraud investigation and asset recovery — Multi-jurisdiction',
    'ADVISORY: Elevated stalking and harassment activity — London, Dubai, Geneva',
    'MONITORING: Boardroom dispute escalation — Private equity-backed portfolio',
    'RESOLVED: UWO dismissed — full asset protection secured — UK High Court',
    'ADVISORY: Family estate dispute — mediation underway — outcome expected shortly'
  ]
};
