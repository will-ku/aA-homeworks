class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    while !game_over
      take_turn
    end
    
    if game_over
      game_over_message
      reset_game
    end
  end

  def take_turn
    show_sequence
    require_sequence

    unless @game_over
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      puts color
      sleep 0.75
      system("clear")
      sleep 0.25
    end
  end

  def require_sequence
    puts "guess the colors"
    seq.each do |color|
      puts color
      # sleep
      user_guess = gets.chomp
        @game_over if user_guess != color
    end
    sleep
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "Round complete. Keep going."
  end

  def game_over_message
    puts "lol"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
