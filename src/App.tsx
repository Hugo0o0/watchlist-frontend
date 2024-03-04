import { Button, FormInput, Heading, Text } from "@/components/UI";
import { IoSearch } from "react-icons/io5";

const App = () => {
  return (
    <div>
      <Heading size="l">Hello World</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti.
      </Text>

      <FormInput
        placeholder="Search for movies or TV series"
        type="search"
        icon={<IoSearch size={32} />}
        error="This field is required."
      />

      <Button variant="primary">Primary Button</Button>
    </div>
  );
};

export default App;
