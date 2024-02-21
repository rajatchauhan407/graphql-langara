import { useState } from 'react';
import { Button, Form, Input, Select} from 'antd';
const AddCar = () => {

    const [form] = Form.useForm();
    return (
        <Form
            name='add-car-form'
            layout='inline'
            size='large'
            style={{ marginBottom: '40px' }}
        >
        <Form.Item
            name='year'
            rules={[{ required: true, message: 'Please enter an year' }]}
            style={{ marginBottom: '20px' }}
            label='Year'
        >
            <Input placeholder='i.e. 2020' />
        </Form.Item>
        <Form.Item
            name='make'
            rules={[{ required: true, message: 'Please enter a make' }]}
            label='Make'
        >
            <Input placeholder='i.e. Toyota' />
        </Form.Item>
        
        <Form.Item
            name='model'
            rules={[{ required: true, message: 'Please enter a model' }]}
            label='Model'
        >
            <Input placeholder='i.e. Camry' />
        </Form.Item>
        <Form.Item
            name='price'
            rules={[{ required: true, message: 'Please enter a price' }]}
            label='Price'
            >
            <Input placeholder='i.e. 25000' />
        </Form.Item>
        <Form.Item
        name="personId"
        rules={[{ required: true, message: 'Please select a person ID' }]}
        label="Person ID"
      >
        <Select placeholder="Select a person ID">
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
          <Select.Option value="4">4</Select.Option>
          <Select.Option value="5">5</Select.Option>
        </Select>
      </Form.Item>
        <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type='primary'
            htmlType='submit'
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Add Car
          </Button>
        )}
        </Form.Item>
        </Form>
    )
}

export default AddCar;
