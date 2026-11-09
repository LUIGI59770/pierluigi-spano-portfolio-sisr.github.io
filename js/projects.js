const projects = [
    {
        id: 1,
        title: "Infrastructure réseau GNS3",
        category: "Réseau",
        description: "Conception et configuration d'une maquette réseau multi-sites avec routage dynamique et cloisonnement VLAN.",
        contexte: "Réalisé dans le cadre des TP de seconde année de BTS SIO option SISR.",
        objectifs: "Mettre en place un routage inter-VLAN sécurisé, configurer le service DHCP et distribuer les accès via des listes de contrôle d'accès (ACL).",
        architecture: "Architecture routeurs Cisco IOS interconnectés, switchs de niveau 2 et 3, postes clients virtuels.",
        technologies: ["GNS3", "Cisco IOS", "VLAN", "DHCP", "Routage", "NAT", "ACL"],
        travailRealise: "Attribution des plans d'adressage IPv4, configuration des interfaces des routeurs, mise en place du protocole de routage dynamique OSPF et tests de connectivité.",
        difficultes: "Gestion des tables de routage et des règles de filtrage ACL bloquant le trafic inter-VLAN non autorisé.",
        solutions: "Analyse des trames via Wireshark et correction des masques de sous-réseau et des règles de pare-feu.",
        competences: "Gérer le patrimoine informatique, Travailler en mode projet, Déployer et tester des services.",
        pdf: "assets/projets/gns3/documentation.pdf"
    },
    {
        id: 2,
        title: "Déploiement Active Directory",
        category: "Système",
        description: "Mise en place d'un domaine d'entreprise sous Windows Server avec gestion centralisée des utilisateurs et GPO.",
        contexte: "Projet d'infrastructure système simulant un réseau d'entreprise de 50 postes.",
        objectifs: "Centraliser l'authentification, automatiser le déploiement de logiciels et appliquer des stratégies de sécurité par GPO.",
        architecture: "Contrôleur de domaine Windows Server 2022, serveur DNS secondaire, clients Windows 11 intégrés au domaine.",
        technologies: ["Windows Server", "Active Directory", "DNS", "DHCP", "GPO", "Windows 11"],
        travailRealise: "Installation et configuration du rôle AD DS, création des Unités d'Organisation (OU), intégration des utilisateurs et création de GPO de restriction de bureau.",
        difficultes: "Résolution de problèmes de réplication DNS et application des stratégies de mot de passe complexes.",
        solutions: "Vérification des enregistrements SRV dans le DNS et tests des GPO via la commande gpupdate /force.",
        competences: "Gérer le patrimoine informatique, Gérer les habilitations, Assurer la continuité de service.",
        pdf: "assets/projets/ad/documentation.pdf"
    },
    {
        id: 3,
        title: "Plateforme de gestion GLPI",
        category: "Supervision",
        description: "Installation et configuration d'un centre de services et d'inventaire du parc informatique open-source.",
        contexte: "Besoin d'automatiser l'inventaire matériel/logiciel et la gestion des tickets d'incidents.",
        objectifs: "Déployer GLPI couplé à un agent d'inventaire pour centraliser les demandes du support technique.",
        architecture: "Serveur Debian Linux hébergeant une pile LAMP (Apache, MariaDB, PHP) et l'application GLPI.",
        technologies: ["Debian", "Apache", "MariaDB", "PHP", "GLPI", "SNMP"],
        travailRealise: "Installation de l'OS Linux, configuration du serveur web, sécurisation de la base de données et paramétrage des profils utilisateurs et des règles d'affectation des tickets.",
        difficultes: "Configuration des droits d'accès aux répertoires du serveur web et remontée des agents automatiques.",
        solutions: "Application des bonnes pratiques de sécurisation des permissions Linux (chown/chmod) et configuration du connecteur réseau.",
        competences: "Répondre aux incidents et aux demandes d'assistance, Gérer le patrimoine informatique.",
        pdf: "assets/projets/glpi/documentation.pdf"
    },
    {
        id: 4,
        title: "Supervision réseau avec Zabbix",
        category: "Supervision",
        description: "Mise en place d'une solution de surveillance proactive des serveurs et des équipements réseau.",
        contexte: "Assurer la disponibilité des services critiques et anticiper les pannes matérielles.",
        objectifs: "Configurer des alertes en temps réel par e-mail et surveiller la charge CPU, RAM et bande passante.",
        architecture: "Serveur Zabbix sous Linux, agents déployés sur les machines virtuelles et switches surveillés via SNMP.",
        technologies: ["Linux", "Zabbix", "SNMP", "Agents Zabbix", "Dashboards"],
        travailRealise: "Création des hôtes, association des templates de surveillance standard, configuration des seuils d'alerte et test des notifications.",
        difficultes: "Gestion du trafic SNMP et des pare-feux bloquant les ports de communication de l'agent.",
        solutions: "Ouverture des flux nécessaires sur les règles de pare-feu locales et validation des clés de communauté SNMP.",
        competences: "Assurer la continuité de service, Gérer le patrimoine informatique.",
        pdf: "assets/projets/zabbix/documentation.pdf"
    },
    {
        id: 5,
        title: "Pare-feu et Sécurité pfSense",
        category: "Cybersécurité",
        description: "Mise en œuvre d'une passerelle de sécurité périmétrique et de filtrage des flux inter-réseaux.",
        contexte: "Protéger le réseau interne de l'entreprise contre les intrusions extérieures et contrôler les accès Internet.",
        objectifs: "Configurer les interfaces WAN, LAN, DMZ, mettre en place un serveur VPN OpenVPN et filtrer les flux.",
        architecture: "Pare-feu pfSense virtualisé sous Proxmox avec cartes réseaux virtuelles dédiées aux différentes zones.",
        technologies: ["pfSense", "VLAN", "NAT", "Firewall", "VPN", "OpenVPN"],
        travailRealise: "Paramétrage des règles de pare-feu granulaires, configuration du NAT/PAT pour l'accès aux services web internes et mise en place d'un tunnel VPN sécurisé.",
        difficultes: "Routage du trafic à travers la DMZ et paramétrage des certificats pour le VPN.",
        solutions: "Documentation des flux réseau et validation par tests d'intrusion internes avec Kali Linux.",
        competences: "Cybersécurité, Gérer le patrimoine informatique, Assurer la continuité de service.",
        pdf: "assets/projets/pfsense/documentation.pdf"
    },
    {
        id: 6,
        title: "Audit et Analyse de trafic Réseau",
        category: "Cybersécurité",
        description: "Analyse des vulnérabilités et capture de trafic suspect pour cartographier les risques.",
        contexte: "Travaux pratiques de cybersécurité pour identifier les failles d'un réseau non sécurisé.",
        objectifs: "Détecter des anomalies sur le réseau, analyser des captures de paquets et durcir les configurations.",
        architecture: "Environnement isolé comprenant un attaquant (Kali Linux) et des cibles vulnérables.",
        technologies: ["Kali Linux", "Wireshark", "Suricata", "IDS/IPS", "Analyse de trafic"],
        travailRealise: "Utilisation de Wireshark pour filtrer les protocoles non chiffrés, configuration d'une sonde IDS Suricata pour détecter des tentatives de scan de ports.",
        difficultes: "Interprétation des faux positifs remontés par les sondes de détection d'intrusion.",
        solutions: "Affinement des règles de détection et corrélation des logs d'événements.",
        competences: "Cybersécurité, Répondre aux incidents, Vérifier les règles d'utilisation.",
        pdf: "assets/projets/cyber/documentation.pdf"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modalOverlay = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const modalBody = document.getElementById('modal-body-content');

    if (!grid) return;

    // Fonction de rendu des projets
    function renderProjects(filter = 'Tous') {
        grid.innerHTML = '';
        
        const filtered = filter === 'Tous' 
            ? projects 
            : projects.filter(p => p.category === filter);

        filtered.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-img-placeholder">
                    <i class="fas fa-laptop-code"></i>
                </div>
                <div class="project-content">
                    <span class="badge" style="margin-bottom: 0.5rem; width: fit-content;">${project.category}</span>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="badge-container" style="margin-bottom: 1.5rem;">
                        ${project.technologies.slice(0, 4).map(t => `<span class="badge">${t}</span>`).join('')}
                    </div>
                    <button class="btn btn-primary" data-id="${project.id}" style="width: 100%; justify-content: center;">
                        <i class="fas fa-eye"></i> Voir le projet
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });

        // Attacher les écouteurs sur les boutons "Voir le projet"
        document.querySelectorAll('.project-card .btn-primary').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.getAttribute('data-id'));
                openModal(id);
            });
        });
    }

    // Gestion de la modale
    function openModal(id) {
        const project = projects.find(p => p.id === id);
        if (!project) return;

        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <span class="badge" style="margin-bottom: 1rem; display: inline-block;">${project.category}</span>
            
            <h4>Contexte</h4>
            <p>${project.contexte}</p>
            
            <h4>Objectifs</h4>
            <p>${project.objectifs}</p>
            
            <h4>Architecture</h4>
            <p>${project.architecture}</p>
            
            <h4>Technologies utilisées</h4>
            <div class="badge-container" style="margin-top: 0.5rem; margin-bottom: 1rem;">
                ${project.technologies.map(t => `<span class="badge">${t}</span>`).join('')}
            </div>
            
            <h4>Travail réalisé</h4>
            <p>${project.travailRealise}</p>
            
            <h4>Difficultés rencontrées & Solutions</h4>
            <p><strong>Difficulté :</strong> ${project.difficultes}</p>
            <p><strong>Solution :</strong> ${project.solutions}</p>
            
            <h4>Compétences BTS mobilisées</h4>
            <p>${project.competences}</p>
            
            <div style="margin-top: 2rem; text-align: right;">
                <a href="${project.pdf}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-file-pdf"></i> Télécharger la documentation PDF
                </a>
            </div>
        `;

        modalOverlay.classList.add('active');
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    // Gestion des filtres
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderProjects(filter);
        });
    });

    // Premier rendu initial
    renderProjects('Tous');
});