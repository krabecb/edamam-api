import './SearchForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default function SearchForm({ input, setInput, search }) {
    return (
        <div className="SearchForm">
            <Form onSubmit={evt => search(evt)}>
                <FormGroup>
                    <Label for="search">
                        Find A Recipe
                    </Label>
                    <Input
                        id="search"
                        name="search"
                        value={input}
                        onChange={evt => setInput(evt.target.value)}
                    />
                </FormGroup>
                <Button color="primary">Search</Button>
            </Form>
        </div>
    )
}