import { Card, CardBody, Heading, Text, Image, Stack } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
function SkillCard({ image, title, description }) {
  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' maxH={'100%'} maxW="100%">
      <Image objectFit='cover' boxSize={{ base: '100px', sm: '100px' }} src={image} alt={title} />
      <Stack>
        <CardBody>
          <Heading size='md'>{title}</Heading>
          <Text py='2'>{description}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default SkillCard;