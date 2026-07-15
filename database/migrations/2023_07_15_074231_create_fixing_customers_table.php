<?php

use App\Models\Customer;
use App\Models\Status;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('fixing_customers', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Customer::class, 'customer_id');
            $table->string('jenis_kerusakan');
            $table->string('nama_panel');
            $table->string('lama_pengerjaan');
            $table->string('estimasi_harga');
            $table->string('catatan_customer')->nullable();
            $table->foreignIdFor(Status::class)->default('1'); // 1 = prosess | 2 = selesai
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fixing_customers');
    }
};
