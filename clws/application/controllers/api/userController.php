<?php
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

//include Rest Controller library
require APPPATH . '/libraries/REST_Controller.php';

class User_Controller extends REST_Controller
{

    public function __construct()
    {
        parent::__construct();

        //load user model
        $this->load->model('user');
        // Configure limits on our controller methods
        // Ensure you have created the 'limits' table and enabled 'limits' within application/config/rest.php
        $this->methods['users_get']['limit'] = 500; // 500 requests per hour per user/key
        $this->methods['users_post']['limit'] = 100; // 100 requests per hour per user/key
        $this->methods['users_delete']['limit'] = 50; // 50 requests per hour per user/key
    }

    public function user_get($id = 0)
    {
        //returns all rows if the id parameter doesn't exist,
        //otherwise single row will be returned
        $users = $this->user->getRows($id);

        //check if the user data exists
        if (!empty($users)) {
            //set the response and exit
            $this->response($users, REST_Controller::HTTP_OK);
        } else {
            //set the response and exit
            $this->response([
                'status' => false,
                'message' => 'No user were found.',
            ], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function user_post()
    {
        $userData = array();
        $userData['first_name'] = $this->post('first_name');
        $userData['last_name'] = $this->post('last_name');
        $userData['email'] = $this->post('email');
        $userData['phone'] = $this->post('phone');
        if (!empty($userData['first_name']) && !empty($userData['last_name']) && !empty($userData['email']) && !empty($userData['phone'])) {
            //insert user data
            $insert = $this->user->insert($userData);

            //check if the user data inserted
            if ($insert) {
                //set the response and exit
                $this->response([
                    'status' => true,
                    'message' => 'User has been added successfully.',
                ], REST_Controller::HTTP_OK);
            } else {
                //set the response and exit
                $this->response("Some problems occurred, please try again.", REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            //set the response and exit
            $this->response("Provide complete user information to create.", REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function user_put()
    {
        $userData = array();
        $id = $this->put('id');
        $userData['first_name'] = $this->put('first_name');
        $userData['last_name'] = $this->put('last_name');
        $userData['email'] = $this->put('email');
        $userData['phone'] = $this->put('phone');
        if (!empty($id) && !empty($userData['first_name']) && !empty($userData['last_name']) && !empty($userData['email']) && !empty($userData['phone'])) {
            //update user data
            $update = $this->user->update($userData, $id);

            //check if the user data updated
            if ($update) {
                //set the response and exit
                $this->response([
                    'status' => true,
                    'message' => 'User has been updated successfully.',
                ], REST_Controller::HTTP_OK);
            } else {
                //set the response and exit
                $this->response("Some problems occurred, please try again.", REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            //set the response and exit
            $this->response("Provide complete user information to update.", REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function user_delete($id)
    {
        //check whether post id is not empty
        if ($id) {
            //delete post
            $delete = $this->user->delete($id);

            if ($delete) {
                //set the response and exit
                $this->response([
                    'status' => true,
                    'message' => 'User has been removed successfully.',
                ], REST_Controller::HTTP_OK);
            } else {
                //set the response and exit
                $this->response("Some problems occurred, please try again.", REST_Controller::HTTP_BAD_REQUEST);
            }
        } else {
            //set the response and exit
            $this->response([
                'status' => false,
                'message' => 'No user were found.',
            ], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function users_get()
    {
        // Users from a data store e.g. database
        $users = [
            ['id' => 1, 'name' => 'John', 'email' => 'john@example.com', 'fact' => 'Loves coding'],
            ['id' => 2, 'name' => 'Jim', 'email' => 'jim@example.com', 'fact' => 'Developed on CodeIgniter'],
            ['id' => 3, 'name' => 'Jane', 'email' => 'jane@example.com', 'fact' => 'Lives in the USA', ['hobbies' => ['guitar', 'cycling']]],
        ];

        $id = $this->get('id');

        // If the id parameter doesn't exist return all the users

        if ($id === null) {
            // Check if the users data store contains users (in case the database result returns NULL)
            if ($users) {
                // Set the response and exit
                $this->response($users, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
            } else {
                // Set the response and exit
                $this->response([
                    'status' => false,
                    'message' => 'No users were found',
                ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
            }
        }

        // Find and return a single record for a particular user.

        $id = (int) $id;

        // Validate the id.
        if ($id <= 0) {
            // Invalid id, set the response and exit.
            $this->response(null, REST_Controller::HTTP_BAD_REQUEST); // BAD_REQUEST (400) being the HTTP response code
        }

        // Get the user from the array, using the id as key for retrieval.
        // Usually a model is to be used for this.

        $user = null;

        if (!empty($users)) {
            foreach ($users as $key => $value) {
                if (isset($value['id']) && $value['id'] === $id) {
                    $user = $value;
                }
            }
        }

        if (!empty($user)) {
            $this->set_response($user, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
        } else {
            $this->set_response([
                'status' => false,
                'message' => 'User could not be found',
            ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
        }
    }

    public function users_post()
    {
        // $this->some_model->update_user( ... );
        $message = [
            'id' => 100, // Automatically generated by the model
            'name' => $this->post('name'),
            'email' => $this->post('email'),
            'message' => 'Added a resource',
        ];

        $this->set_response($message, REST_Controller::HTTP_CREATED); // CREATED (201) being the HTTP response code
    }

    public function users_delete()
    {
        $id = (int) $this->get('id');

        // Validate the id.
        if ($id <= 0) {
            // Set the response and exit
            $this->response(null, REST_Controller::HTTP_BAD_REQUEST); // BAD_REQUEST (400) being the HTTP response code
        }

        // $this->some_model->delete_something($id);
        $message = [
            'id' => $id,
            'message' => 'Deleted the resource',
        ];

        $this->set_response($message, REST_Controller::HTTP_NO_CONTENT); // NO_CONTENT (204) being the HTTP response code
    }

}
