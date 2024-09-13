import { Box, Grid } from '@chakra-ui/react';
import SkillCard from './SkillCard';

import js from '../../images/js.png'
import html from '../../images/html.png'
import css from '../../images/css.png'
import java from '../../images/java.png'
import php from '../../images/php.png'
import react from '../../images/react.png'
import c from '../../images/c.png'
import cpp from '../../images/cpp.png'

function SkillsArea() {
  const skills = [
    {
      image: html,
      title: 'HTML',
      description: 'HTML (HyperText Markup Language) é a linguagem padrão usada para criar e estruturar páginas web.'
    },
    {
      image: css,
      title: 'CSS',
      description: 'CSS (Cascading Style Sheets) é a linguagem usada para estilizar e formatar elementos em páginas web, controlando layout, cores, fontes e espaçamento.'
    },
    {
      image: js,
      title: 'Javascript',
      description: 'JavaScript é uma linguagem de programação usada para criar interatividade e dinamismo em páginas web, permitindo a manipulação de elementos HTML e CSS, além de comunicações assíncronas com servidores.'
    },
    {
      image: react,
      title: 'React',
      description: 'React é uma biblioteca JavaScript para construir interfaces de usuário, focada em componentes reutilizáveis e a gestão eficiente do estado da aplicação.'
    },
    {
      image: java,
      title: 'Java',
      description: 'Java é uma linguagem de programação de propósito geral, orientada a objetos, conhecida por sua portabilidade, robustez e segurança, amplamente utilizada em desenvolvimento de software empresarial e aplicações Android.'
    },
    {
      image: php,
      title: 'PHP',
      description: 'PHP é uma linguagem de script de código aberto usada principalmente para desenvolvimento web do lado do servidor, permitindo a criação de páginas web dinâmicas e interativas.',
    },
    {
      image: c,
      title: 'C',
      description: 'C é uma linguagem de programação de baixo nível e propósito geral, conhecida por sua eficiência e controle de hardware, amplamente usada em desenvolvimento de sistemas, aplicações de alto desempenho e software de sistema.',
    },
    {
      image: cpp,
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