import { Box, Grid } from '@chakra-ui/react';
import SkillCard from './SkillCard';

function SkillsArea() {
  const skills = [
    {
      image: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
      title: 'HTML',
      description: 'HTML (HyperText Markup Language) é a linguagem padrão usada para criar e estruturar páginas web.'
    },
    {
      image: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',
      title: 'CSS',
      description: 'CSS (Cascading Style Sheets) é a linguagem usada para estilizar e formatar elementos em páginas web, controlando layout, cores, fontes e espaçamento.'
    },
    {
      image: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',
      title: 'Javascript',
      description: 'JavaScript é uma linguagem de programação usada para criar interatividade e dinamismo em páginas web, permitindo a manipulação de elementos HTML e CSS, além de comunicações assíncronas com servidores.'
    },
    {
      image: 'https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000',//img.icons8.com/?size=100&id=108784&format=png&color=000000'',
      title: 'React',
      description: 'React é uma biblioteca JavaScript para construir interfaces de usuário, focada em componentes reutilizáveis e a gestão eficiente do estado da aplicação.'
    },
    {
      image: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000',
      title: 'Java',
      description: 'Java é uma linguagem de programação de propósito geral, orientada a objetos, conhecida por sua portabilidade, robustez e segurança, amplamente utilizada em desenvolvimento de software empresarial e aplicações Android.'
    },
    {
      image: 'https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000',
      title: 'PHP',
      description: 'PHP é uma linguagem de script de código aberto usada principalmente para desenvolvimento web do lado do servidor, permitindo a criação de páginas web dinâmicas e interativas.',
    },
    {
      image: 'https://img.icons8.com/?size=100&id=shQTXiDQiQVR&format=png&color=000000',
      title: 'C',
      description: 'C é uma linguagem de programação de baixo nível e propósito geral, conhecida por sua eficiência e controle de hardware, amplamente usada em desenvolvimento de sistemas, aplicações de alto desempenho e software de sistema.',
    },
    {
      image: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000',
      title: 'C++',
      description: 'C++ é uma linguagem de programação de propósito geral que estende o C com suporte a programação orientada a objetos, usada em desenvolvimento de software de sistemas, jogos, aplicações de alto desempenho e sistemas embarcados.',
    }
    // Adicione mais objetos conforme necessário
  ];

  return (
    <Box m={'auto'} p={2}>
      <Grid templateColumns='repeat(2, 1fr)' gap={4}>
        {skills.map((skill, index) => (
          <SkillCard key={index} image={skill.image} title={skill.title} description={skill.description} />
        ))}
      </Grid>
    </Box>
  );
}

export default SkillsArea;