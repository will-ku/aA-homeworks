class ApplicationController < ActionController::Base
    helper_method :current_user
    # CRRLLL

    def current_user
        @current_user = User.find_by(session_token: session[:session_token])
    end

    def require_login
        redirect_to new_session_url unless logged_in?
    end

    def require_logout
        redirect_to users_url if logged_in?
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
    end

    def log_out
        current_user.session_token = reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

end
